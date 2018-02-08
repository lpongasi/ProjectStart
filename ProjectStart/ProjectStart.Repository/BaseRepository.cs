using ProjectStart.Entity;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ProjectStart.Repository
{
    internal class BaseRepository<T> : IBaseRepository<T> where T : class
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

        public IEnumerable<TResult> GetAll<TResult>(Expression<Func<T, TResult>> transformResult, int? page = null, int? pageSize = null)
        => page.HasValue && pageSize.HasValue && page.Value > 0 && pageSize.Value > 0
          ? Entity.Select(transformResult).Skip((page.Value - 1) * pageSize.Value).Take(pageSize.Value).ToList()
          : Entity.Select(transformResult).Take(100).ToList();


        public IEnumerable<TResult> GetAll<TResult>(Expression<Func<T, TResult>> transformResult, Expression<Func<TResult, bool>> where, int? page = null, int? pageSize = null)
         => page.HasValue && pageSize.HasValue && page.Value > 0 && pageSize.Value > 0
          ? Entity.Select(transformResult).Where(where).Skip((page.Value - 1) * pageSize.Value).Take(pageSize.Value).ToList()
          : Entity.Select(transformResult).Where(where).Take(100).ToList();

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
