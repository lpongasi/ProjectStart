using System;
using System.Data;
using ProjectStart.Entity;

namespace ProjectStart.Repository
{
    internal class UnitOfWork : IUnitOfWork
    {
        public ApplicationDbContext ApplicationDbContext { get; }        
        public CmsDbContext CmsDbContext { get; }
        public IDbConnection AppDbConnection => ApplicationDbContext.DbConnection;
        public IDbConnection CmsDbConnection => CmsDbContext.DbConnection;
        public IServiceProvider Service { get; }
        public UnitOfWork(ApplicationDbContext applicationDbContext, CmsDbContext cmsDbContext, IServiceProvider service)
        {
            CmsDbContext = cmsDbContext;
            ApplicationDbContext = applicationDbContext;
            Service = service;
        }
        private T GetService<T>() where T : class
        {
            return Service.GetService(typeof(T)) as T;
        }
        public IBaseRepository<ApplicationUser> UserRepository => GetService<IBaseRepository<ApplicationUser>>();
        public AccountRepository AccountRepository => GetService<AccountRepository>();
    }
}
