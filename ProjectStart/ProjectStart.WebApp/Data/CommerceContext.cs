using Microsoft.EntityFrameworkCore;
using ProjectStart.Commerce;

namespace ProjectStart.WebApp
{
    public class CommerceContext : DbContext
    {
        public CommerceContext(DbContextOptions<CommerceContext> options)
            : base(options)
        { }
        public DbSet<Node> Nodes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.InitializeCommerceModel();
        }
    }
}
