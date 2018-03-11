using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectStart.Entity.Common
{
    public abstract class BaseEntity
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity), ForeignKey("History")]
        public string Id { get; set; }
        [Required]
        public string Name { get; set; }
        public HistoryEntity History { get; set; } = new HistoryEntity();
    }
}
