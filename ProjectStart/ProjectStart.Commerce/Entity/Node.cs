using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using ProjectStart.Commerce.Common;

namespace ProjectStart.Commerce.Entity
{
    [Table("Node")]
    public class Node : Audit
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? ParentId { get; set; }
        public virtual Node ParentNode { get; set; }
        public virtual ICollection<Node> SubNodes { get; set; } = new HashSet<Node>();
    }
}
