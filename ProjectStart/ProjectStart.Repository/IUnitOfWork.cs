using ProjectStart.Entity;
using System;

namespace ProjectStart.Repository
{
    public interface IUnitOfWork
    {
        ApplicationDbContext ApplicationDbContext { get; }
        CmsDbContext CmsDbContext { get; }
        IServiceProvider Service { get; }
        IBaseRepository<ApplicationUser> UserRepository { get; }
        AccountRepository AccountRepository { get; }
    }
}
