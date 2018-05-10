using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ProjectStart.Common.ViewModel
{
    public class FilterDataViewModel<T>
    {
        public IEnumerable<T> Data { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public int TotalRecord { get; set; }
    }
}
