using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectStart.Entity
{
    [Table("Node")]
    public class NodeEntity : BaseEntity
    {
        [ForeignKey("ParentNode")]
        public virtual string ParentId { get; set; }
        public virtual NodeEntity ParentNode { get; set; }
        public virtual ICollection<NodeEntity> SubNodes { get; set; } = new HashSet<NodeEntity>();
    }
}
