using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using ProjectStart.Commerce.Common;

namespace ProjectStart.Commerce.Entity
{
    public class Node : Audit
    {
        public long? ParentNodeId { get; set; }
        public virtual Node ParentNode { get; set; }
        public virtual ICollection<Node> SubNodes { get; set; } = new HashSet<Node>();
        public virtual ICollection<Product> Products { get; set; } = new HashSet<Product>();
    }
}
