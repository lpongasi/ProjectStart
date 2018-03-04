using Microsoft.EntityFrameworkCore;
using ProjectStart.Entity.Cms;

namespace ProjectStart.Entity
{
    public partial class ApplicationDbContext
    {
        public DbSet<PageDataEntity> PageData { get; set; }
        private void CmsOnModelCreating(ModelBuilder builder)
        {

        }

    }
}
