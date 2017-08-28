using Microsoft.EntityFrameworkCore;
using ProjectStart.Commerce.Entity;
using System;

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
                .Property(p => p.DateCreated)
                .ValueGeneratedOnAdd();

                entity
                .Property(p => p.DateModified)
                .ValueGeneratedOnUpdate();

                entity
                    .HasMany(m => m.SubNodes)
                    .WithOne(o => o.ParentNode)
                    .HasForeignKey(f => f.ParentId)
                    .HasPrincipalKey(k => k.Id);
            });
        }
    }
}
