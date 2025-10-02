using CenteralLibrary.Domain.Entities;
using CenteralLibrary.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace CenteralLibrary.Infrastructure.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        private readonly AppDbContext _dbContext;
        public UserRepository(AppDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<User?> GetByUsernameOrEmailAsync(string usernameOrEmail, CancellationToken cancellationToken = default)
        {
            return _dbContext.Users.AsNoTracking().FirstOrDefaultAsync(
                u => u.Username == usernameOrEmail || u.Email == usernameOrEmail,
                cancellationToken);
        }
    }
}


