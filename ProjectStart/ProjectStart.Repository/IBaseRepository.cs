using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

namespace ProjectStart.Repository
{
    public interface IBaseRepository<T> where T : class
    {
        DbSet<T> Entity { get; }
        TResult Get<TResult>(Expression<Func<T, TResult>> transformResult, Expression<Func<T, bool>> where);
        IEnumerable<TResult> GetAll<TResult>(Expression<Func<T, TResult>> transformResult, int? page = null, int? pageSize = null);
        IEnumerable<TResult> GetAll<TResult>(Expression<Func<T, TResult>> transformResult, Expression<Func<TResult, bool>> where, int? page = null, int? pageSize = null);
        void Add(IEnumerable<T> entities);
        void Add(T entity);
        void Update(T entity);
        void Update(IEnumerable<T> entities);
        void Delete(T entity);
        void Delete(Expression<Func<T, bool>> where);
    }
}
