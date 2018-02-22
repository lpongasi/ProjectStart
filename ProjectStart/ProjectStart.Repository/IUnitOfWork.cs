﻿using ProjectStart.Entity;
using System.Threading.Tasks;

namespace ProjectStart.Repository
{
    public interface IUnitOfWork
    {
        CommerceDbContext DbContext { get; }
        IBaseRepository<NodeEntity> NodeRepository { get; }
        void SaveChanges();
        Task<int> SaveChangesAsync();
    }
}
