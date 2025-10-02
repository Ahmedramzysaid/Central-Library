using CenteralLibrary.Domain.Entities;

namespace CenteralLibrary.Infrastructure.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User?> GetByUsernameOrEmailAsync(string usernameOrEmail, CancellationToken cancellationToken = default);
    }
}


