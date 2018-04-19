using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjectStart.Entity;

namespace ProjectStart.Repository
{
    internal class UnitOfWork : IUnitOfWork
    {
        public ApplicationDbContext ApplicationDbContext { get; }
        public CmsDbContext CmsDbContext { get; }
        public UnitOfWork(ApplicationDbContext applicationDbContext, CmsDbContext cmsDbContext)
        {
            CmsDbContext = cmsDbContext;
            ApplicationDbContext = applicationDbContext;
        }
        private IBaseRepository<T> Initialize<T, TContext>(IBaseRepository<T> repository, TContext dbContext)
            where T : class
            where TContext : DbContext
            => repository ?? (repository = new BaseRepository<T, TContext>(dbContext));

        private IBaseRepository<ApplicationUser> _userRepository;
        public IBaseRepository<ApplicationUser> UserRepository => Initialize(_userRepository, ApplicationDbContext);
    }
}
