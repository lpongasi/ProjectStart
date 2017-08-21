using ProjectStart.Commerce.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ProjectStart.Commerce
{
    [Table("Node")]
    public class Node : Audit
    {
        public Node()
        {
            SubNodes = new HashSet<Node>();
        }        
        public int Id { get; set; }
        public string Name { get; set; }
        public int? ParentId { get; set; }
        public virtual Node ParentNode { get; set; }
        public virtual ICollection<Node> SubNodes { get; set; }
    }
}
