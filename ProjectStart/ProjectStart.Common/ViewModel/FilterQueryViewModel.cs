using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectStart.Common.ViewModel
{
    public class FilterQueryViewModel
    {
        public IDictionary<string,object> Q { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        [JsonIgnore]
        public bool WithTotalRecord { get; set; }
    }
}
