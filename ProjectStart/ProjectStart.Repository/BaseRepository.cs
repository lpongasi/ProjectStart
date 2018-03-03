using ProjectStart.Entity;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace ProjectStart.Repository
{
    internal class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        public DbSet<T> Entity { get; }
        private readonly DbContext _entityDbContext;
        public BaseRepository(DbContext entityDbContext)
        {
            _entityDbContext = entityDbContext;
            Entity = entityDbContext.Set<T>();
        }

        public void Add(IEnumerable<T> entities)
        {
            Entity.AddRange(entities);
            SaveChanges();
        }

        public void Add(T entity)
        {
            Entity.Add(entity);
            SaveChanges();
        }

        public void Delete(T entity)
        {
            Entity.Remove(entity);
            SaveChanges();
        }

        public void Delete(Expression<Func<T, bool>> where)
        {
            Entity.RemoveRange(Entity.Where(where));
            SaveChanges();
        }

        public TResult Get<TResult>(Expression<Func<T, TResult>> output, Expression<Func<TResult, bool>> predicate)
        => Entity.Select(output).FirstOrDefault(predicate);

        public IEnumerable<TResult> GetAll<TResult>(
            Expression<Func<T, TResult>> output,
            Expression<Func<TResult, bool>> predicate = null,
            Func<IQueryable<TResult>, IOrderedQueryable<TResult>> order = null,
            int? page = null,
            int? pageSize = null)
        {
            var result = Entity.Select(output);
            if (predicate != null)
                result = result.Where(predicate);
            if (order != null)
                result = order(result);
            return page.HasValue && pageSize.HasValue && page.Value > 0 && pageSize.Value > 0
              ? result.Skip((page.Value - 1) * pageSize.Value).Take(pageSize.Value).ToList()
              : result.Take(100).ToList();
        }
        public void Update(T entity)
        {
            Entity.Update(entity);
            SaveChanges();
        }

        public void Update(IEnumerable<T> entities)
        {
            Entity.UpdateRange(entities);
            SaveChanges();
        }

        public void SaveChanges()
        {
            _entityDbContext.SaveChanges();
        }

        public async Task<int> SaveChangesAsync()
        {
            return await _entityDbContext.SaveChangesAsync();
        }
    }
}
