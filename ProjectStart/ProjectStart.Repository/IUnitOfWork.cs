using ProjectStart.Entity;
using System;
using System.Data;

namespace ProjectStart.Repository
{
    public interface IUnitOfWork
    {
        ApplicationDbContext ApplicationDbContext { get; }
        IDbConnection AppDbConnection { get; }
        IDbConnection CmsDbConnection { get; }
        CmsDbContext CmsDbContext { get; }
        IServiceProvider Service { get; }
        IBaseRepository<ApplicationUser> UserRepository { get; }
        AccountRepository AccountRepository { get; }
    }
}
