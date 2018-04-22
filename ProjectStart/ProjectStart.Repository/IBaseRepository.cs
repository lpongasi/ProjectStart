using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjectStart.Common;
using ProjectStart.Common.ViewModel;
using ProjectStart.Entity;

namespace ProjectStart.Repository
{
    public interface IBaseRepository<T> where T : class
    {
        DbSet<T> Entity { get; }
        TResult Get<TResult>(Expression<Func<T, TResult>> output, Expression<Func<TResult, bool>> predicate = null);
        FilterDataViewModel<TResult> GetAll<TResult>(
            Expression<Func<T, TResult>> output,
            FilterQueryViewModel filter = null,
            Expression<Func<TResult, bool>> predicate = null,
            Func<IQueryable<TResult>, IOrderedQueryable<TResult>> order = null
            );
        void Add(IEnumerable<T> entities);
        void Add(T entity);
        void Update(T entity);
        void Update(IEnumerable<T> entities);
        void Delete(T entity);
        void Delete(Expression<Func<T, bool>> where);
    }
}
