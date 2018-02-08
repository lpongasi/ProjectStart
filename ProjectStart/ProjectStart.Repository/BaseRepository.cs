using ProjectStart.Entity;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ProjectStart.Repository
{
    internal class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        public DbSet<T> Entity { get; }
        private readonly CommerceDbContext _entityDbContext;
        public BaseRepository(CommerceDbContext entityDbContext)
        {
            _entityDbContext = entityDbContext;
            Entity = entityDbContext.Set<T>();
        }

        public void Add(IEnumerable<T> entities)
        {
            Entity.AddRange(entities);
            _entityDbContext.SaveChanges();
        }

        public void Add(T entity)
        {
            Entity.Add(entity);
            _entityDbContext.SaveChanges();
        }

        public void Delete(T entity)
        {
            _entityDbContext.SaveChanges();
        }

        public void Delete(Expression<Func<T, bool>> where)
        {
            Entity.RemoveRange(Entity.Where(where));
            _entityDbContext.SaveChanges();
        }

        public TResult Get<TResult>(Expression<Func<T, TResult>> transformResult, Expression<Func<T, bool>> where)
        {
            throw new NotImplementedException();
        }

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
            _entityDbContext.SaveChanges();
        }

        public void Update(IEnumerable<T> entities)
        {
            Entity.UpdateRange(entities);
            _entityDbContext.SaveChanges();
        }
    }
}
