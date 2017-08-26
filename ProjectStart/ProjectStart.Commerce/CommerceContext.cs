using Microsoft.EntityFrameworkCore;
using ProjectStart.Commerce.Entity;

namespace ProjectStart.Commerce
{
    public class CommerceContext : DbContext
    {
        public CommerceContext(DbContextOptions<CommerceContext> options) : base(options)
        { }
        public DbSet<Node> Nodes { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Node>(entity =>
            {
                entity
                    .ToTable("Node");

                entity
                    .Property(p => p.Id)
                    .ValueGeneratedOnAdd();

                entity
                    .Property(p => p.Name)
                    .IsRequired();

                entity
                    .HasMany(m => m.SubNodes)
                    .WithOne(o => o.ParentNode)
                    .HasForeignKey(f => f.ParentId)
                    .HasPrincipalKey(k => k.Id);
            });
        }
    }
}
