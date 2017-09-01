using ProjectStart.Commerce.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectStart.Commerce.Entity
{
    public class Price : Audit
    {
        public long VarianceId { get; set; }
        public virtual Variance Variance { get; set; }
        public decimal? OldPrice { get; set; }
        public decimal CurrentPrice { get; set; }
        public DateTime ValidFrom { get; set; }
        public DateTime? ValidTo { get; set; }
    }
}
