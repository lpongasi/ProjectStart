using ProjectStart.Common.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ProjectStart.Common.Extensions
{
    public static class PaginationExtension
    {
        public static FilterDataViewModel<T> Paginate<T>(this IQueryable<T> queryable, FilterViewModel filter)
        {
            var filterResult = new FilterDataViewModel<T>();
            if (filter.Page <= 0 || filter.PageSize <= 0)
            {
                filter.Page = 1;
                filter.PageSize = 1;
            }
            filterResult.Page = filter.Page;
            filterResult.PageSize = filter.PageSize;

            filterResult.TotalRecord = queryable.Count();
            filterResult.Data = queryable.Skip((filter.Page - 1) * filter.PageSize).Take(filter.PageSize).ToList();

            return filterResult;
        }
    }
}
