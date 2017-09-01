using Microsoft.EntityFrameworkCore;
using ProjectStart.Commerce.Entity;

namespace ProjectStart.Commerce
{
    public class CommerceContext : DbContext
    {
        public CommerceContext(DbContextOptions<CommerceContext> options) : base(options)
        { }
        public DbSet<Node> Node { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Variance> Variance { get; set; }
        public DbSet<Price> Price { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Price>(e => {
                e.Property(p => p.OldPrice).HasColumnType("decimal(8,4)");
                e.Property(p => p.CurrentPrice).HasColumnType("decimal(8,4)");
            });
        }
    }
}
