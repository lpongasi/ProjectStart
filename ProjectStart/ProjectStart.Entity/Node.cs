using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectStart.Entity
{
    public class Node : BaseEntity
    {
        [ForeignKey("ParentNode")]
        public virtual string ParentId { get; set; }
        public virtual Node ParentNode { get; set; }
        public virtual ICollection<Node> SubNodes { get; set; } = new HashSet<Node>();
    }
}
