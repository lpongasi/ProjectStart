using ProjectStart.Entity;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using ProjectStart.Common.ViewModel;
using Dapper;
using System.Data;
using Microsoft.Extensions.Logging;

namespace ProjectStart.Repository
{
    internal class BaseRepository<T, TContext> : IBaseRepository<T>
        where T : class
        where TContext : DbContext
    {
        public DbSet<T> Entity { get; }
        private readonly string _tableName;
        private readonly TContext _entityDbContext;
        private readonly IDbConnection _dbConnection;
        private readonly ILogger _logger;

        public BaseRepository(TContext entityDbContext, ILogger<BaseRepository<T, TContext>> logger)
        {
            _entityDbContext = entityDbContext;
            _dbConnection = entityDbContext.Database.GetDbConnection();
            Entity = entityDbContext.Set<T>();
            _tableName = entityDbContext.Model.GetEntityTypes(typeof(T)).FirstOrDefault()
                ?.GetAnnotations()
                .FirstOrDefault(f => f.Name.Equals("Relational:TableName", StringComparison.OrdinalIgnoreCase))?.Value.ToString();
            _logger = logger;
        }

        public virtual void Add(IEnumerable<T> entities)
        {
            Entity.AddRange(entities);
            SaveChanges();
        }

        public virtual void Add(T entity)
        {
            Entity.Add(entity);
            SaveChanges();
        }

        public virtual void Delete(T entity)
        {
            Entity.Remove(entity);
            SaveChanges();
        }

        public virtual void Delete(Expression<Func<T, bool>> where)
        {
            Entity.RemoveRange(Entity.Where(where));
            SaveChanges();
        }
        public virtual TResult Get<TResult>(
            string[] select = null,
            string tableName = null,
            string where = null,
            object param = null
            )
        {
            return _dbConnection.QueryFirstOrDefault<TResult>($"SELECT TOP 1 {(select != null ? string.Join(",", select) : "*")} FROM {tableName ?? _tableName}", param);
        }
        public virtual FilterDataViewModel<TResult> GetAll<TResult>(
            string[] select = null,
            string tableName = null,
            string where = null,
            string[] order = null,
            FilterViewModel param = null
            )
        {
            var filter = new FilterDataViewModel<TResult>();
            if (param.Page <= 0 || param.PageSize <= 0)
            {
                param.Page = 1;
                param.PageSize = 1;
            }
            filter.Page = param.Page;
            filter.PageSize = param.PageSize;
            
            var sql = $@"SELECT COUNT(1) FROM {tableName ?? _tableName} {(string.IsNullOrEmpty(where) ? string.Empty : $"WHERE {where}")};
                    SELECT {(select != null ? string.Join(",", select) : string.Join(",",typeof(TResult).GetProperties().Select(s=>s.Name)))} FROM {tableName ?? _tableName}{(string.IsNullOrEmpty(where) ? string.Empty : $" WHERE {where}")} ORDER BY {(order != null ? string.Join(",", order) : "1")} OFFSET ((@Page - 1) * @PageSize) ROWS FETCH NEXT @PageSize ROWS ONLY;";
            _logger.LogInformation($"QueryMultiple: {sql}");
            using (var multi = _dbConnection.QueryMultiple(sql, param))
            {
                filter.TotalRecord = multi.Read<int>().Single();
                filter.Data = multi.Read<TResult>();
            }
            return filter;
        }
        public virtual void Update(T entity)
        {
            Entity.Update(entity);
            SaveChanges();
        }

        public virtual void Update(IEnumerable<T> entities)
        {
            Entity.UpdateRange(entities);
            SaveChanges();
        }

        public virtual void SaveChanges()
        {
            _entityDbContext.SaveChanges();
        }

        public virtual async Task<int> SaveChangesAsync()
        {
            return await _entityDbContext.SaveChangesAsync();
        }
    }
}
