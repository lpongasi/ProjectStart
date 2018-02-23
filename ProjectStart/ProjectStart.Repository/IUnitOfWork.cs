using Microsoft.EntityFrameworkCore;
using ProjectStart.Entity;
using System.Threading.Tasks;

namespace ProjectStart.Repository
{
    public interface IUnitOfWork
    {
        CommerceDbContext DbContext { get; }
        IBaseRepository<NodeEntity> NodeRepository { get; }
    }
}
