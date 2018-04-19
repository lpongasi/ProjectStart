using ProjectStart.Entity;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using ProjectStart.Common;

namespace ProjectStart.Repository
{
    internal class BaseRepository<T, TContext> : IBaseRepository<T>
        where T : class
        where TContext : DbContext
    {
        public DbSet<T> Entity { get; }
        private readonly TContext _entityDbContext;
        public BaseRepository(TContext entityDbContext)
        {
            _entityDbContext = entityDbContext;
            Entity = entityDbContext.Set<T>();
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

        public virtual TResult Get<TResult>(Expression<Func<T, TResult>> output, Expression<Func<TResult, bool>> predicate = null)
        => predicate != null
            ? Entity.Select(output).FirstOrDefault(predicate)
            : Entity.Select(output).FirstOrDefault();



        public virtual IEnumerable<TResult> GetAll<TResult>(
           Expression<Func<T, TResult>> output,
           int? page = null,
           int? pageSize = null,
           Expression<Func<TResult, bool>> predicate = null,
           Func<IQueryable<TResult>, IOrderedQueryable<TResult>> order = null
           )
        {
            var result = Entity.Select(output);
            if (predicate != null)
            {
                result = result.Where(predicate);
            }

            if (order != null)
                result = order(result);

            return page.HasValue && pageSize.HasValue && page.Value > 0 && pageSize.Value > 0
              ? result.Skip((page.Value - 1) * pageSize.Value).Take(pageSize.Value).ToList()
              : result.Take(100).ToList();
        }
        public virtual IEnumerable<TResult> GetAll<TResult>(
            Expression<Func<T, TResult>> output,
            out int totalCount,
            int? page = null,
            int? pageSize = null,
            Expression<Func<TResult, bool>> predicate = null,
            Func<IQueryable<TResult>, IOrderedQueryable<TResult>> order = null
            )
        {

            var result = Entity.Select(output);
            if (predicate != null)
            {
                result = result.Where(predicate);
            }

            totalCount = result.Count();

            if (order != null)
                result = order(result);

            return page.HasValue && pageSize.HasValue && page.Value > 0 && pageSize.Value > 0
              ? result.Skip((page.Value - 1) * pageSize.Value).Take(pageSize.Value).ToList()
              : result.Take(100).ToList();
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
