using ProjectStart.Entity;

namespace ProjectStart.Repository
{
    public interface IUnitOfWork
    {
        CommerceDbContext DbContext { get; }
        IBaseRepository<Node> NodeRepository { get; }
    }
}
