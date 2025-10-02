using CenteralLibrary.Domain.Entities;
using CenteralLibrary.Infrastructure.Persistence;

namespace CenteralLibrary.Infrastructure.Repositories
{
    public class BookRepository : Repository<Book>, IBookRepository
    {
        public BookRepository(AppDbContext dbContext) : base(dbContext)
        {
        }
    }
}

