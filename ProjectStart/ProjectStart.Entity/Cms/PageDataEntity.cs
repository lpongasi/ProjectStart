using ProjectStart.Entity.Common;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectStart.Entity.Cms
{
    [Table("PageData", Schema = "Cms")]
    public class PageDataEntity : NodeEntity<PageDataEntity>, IPageContent
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string ParentUrl { get; set; }
        [Required]
        public string NameUrl { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Keywords { get; set; }

    }
}
