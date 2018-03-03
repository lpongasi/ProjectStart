using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectStart.Entity.Common
{
    public class NodeEntity<T> : BaseEntity
    {
        [ForeignKey("ParentNode")]
        public virtual string ParentId { get; set; }
        public virtual T ParentNode { get; set; }
        public virtual ICollection<T> SubNodes { get; set; } = new HashSet<T>();
    }
}
