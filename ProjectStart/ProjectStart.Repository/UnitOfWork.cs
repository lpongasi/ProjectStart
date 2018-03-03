using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjectStart.Entity;

namespace ProjectStart.Repository
{
    internal class UnitOfWork : IUnitOfWork
    {
        //public CommerceDbContext DbContext { get; }
        //public UnitOfWork(CommerceDbContext entityDbContext)
        //{
        //    DbContext = entityDbContext;
        //}
        //private IBaseRepository<T> Initialize<T>(IBaseRepository<T> repository) where T : class
        //    => repository ?? (repository = new BaseRepository<T>(DbContext));

        //private IBaseRepository<NodeEntity> _nodeRepository;
        //public IBaseRepository<NodeEntity> NodeRepository
        //    => Initialize(_nodeRepository);
        


        //public void SaveChanges()
        //{
        //    DbContext.SaveChanges();
        //}

        //public async Task<int> SaveChangesAsync()
        //{
        //    return await DbContext.SaveChangesAsync();
        //}
    }
}
