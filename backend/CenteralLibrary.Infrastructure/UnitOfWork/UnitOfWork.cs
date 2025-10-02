using System.Threading;
using System.Threading.Tasks;
using CenteralLibrary.Infrastructure.Persistence;
using CenteralLibrary.Infrastructure.Repositories;

namespace CenteralLibrary.Infrastructure.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _dbContext;
        public IBookRepository Books { get; }
        public ICategoryRepository Categories { get; }
        public IUserRepository Users { get; }

        public UnitOfWork(AppDbContext dbContext, IBookRepository bookRepository, ICategoryRepository categoryRepository, IUserRepository userRepository)
        {
            _dbContext = dbContext;
            Books = bookRepository;
            Categories = categoryRepository;
            Users = userRepository;
        }

        public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            return _dbContext.SaveChangesAsync(cancellationToken);
        }
    }
}

