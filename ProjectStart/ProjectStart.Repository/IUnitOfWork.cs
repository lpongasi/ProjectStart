using Microsoft.EntityFrameworkCore;
using ProjectStart.Entity;
using System.Threading.Tasks;

namespace ProjectStart.Repository
{
    public interface IUnitOfWork
    {
        ApplicationDbContext ApplicationDbContext { get; }
        CmsDbContext CmsDbContext { get; }        
        IBaseRepository<ApplicationUser> UserRepository { get; }

        //CommerceDbContext DbContext { get; }
        //IBaseRepository<NodeEntity> NodeRepository { get; }
    }
}
