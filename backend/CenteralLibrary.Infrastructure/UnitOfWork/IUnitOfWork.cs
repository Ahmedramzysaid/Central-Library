using System.Threading;
using System.Threading.Tasks;
using CenteralLibrary.Infrastructure.Repositories;

namespace CenteralLibrary.Infrastructure.UnitOfWork
{
    public interface IUnitOfWork
    {
        IBookRepository Books { get; }
        ICategoryRepository Categories { get; }
        IUserRepository Users { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}

