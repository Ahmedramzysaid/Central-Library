using CenteralLibrary.Domain.Entities;
using CenteralLibrary.Infrastructure.Persistence;

namespace CenteralLibrary.Infrastructure.Repositories
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(AppDbContext dbContext) : base(dbContext)
        {
        }
    }
}

