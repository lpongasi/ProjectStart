using Microsoft.EntityFrameworkCore;

namespace ProjectStart.Entity
{
    public class CommerceDbContext : DbContext
    {
        public CommerceDbContext(DbContextOptions<CommerceDbContext> options) : base(options)
        { }
        public DbSet<Node> Node { get; set; }
    }
}
