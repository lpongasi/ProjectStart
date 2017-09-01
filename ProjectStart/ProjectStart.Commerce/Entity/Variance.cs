using ProjectStart.Commerce.Common;
using System.Collections.Generic;

namespace ProjectStart.Commerce.Entity
{
    public class Variance : Audit
    {
        public long ProductId { get; set; }
        public virtual Product Product { get; set; }
        public virtual ICollection<Price> Price { get; set; } = new HashSet<Price>();

    }
}
