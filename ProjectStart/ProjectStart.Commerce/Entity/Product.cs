using ProjectStart.Commerce.Common;
using System.Collections.Generic;

namespace ProjectStart.Commerce.Entity
{
    public class Product : Audit
    {
        public string Description { get; set; }
        public long NodeId { get; set; }
        public virtual Node Node { get; set; }
        public virtual ICollection<Variance> Variance { get; set; } = new HashSet<Variance>();

    }
}
