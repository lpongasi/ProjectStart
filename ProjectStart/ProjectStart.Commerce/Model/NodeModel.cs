using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProjectStart.Commerce.Model
{
    public class NodeModel
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public int? ParentId { get; set; }
        public List<NodeModel> SubNodes { get; set; } = new List<NodeModel>();

    }
}
