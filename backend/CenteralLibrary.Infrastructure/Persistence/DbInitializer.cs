using CenteralLibrary.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CenteralLibrary.Infrastructure.Persistence
{
    public static class DbInitializer
    {
        public static async Task InitializeAsync(AppDbContext context)
        {
            await context.Database.EnsureCreatedAsync();

            if (!await context.Categories.AnyAsync())
            {
                var categories = new[]
                {
                    new Category { Name = "science", Description = "Science" },
                    new Category { Name = "technology", Description = "Technology" },
                    new Category { Name = "romance", Description = "Romance" },
                    new Category { Name = "adventure", Description = "Adventure" },
                    new Category { Name = "history", Description = "Historical" },
                };
                await context.Categories.AddRangeAsync(categories);
            }

            if (!await context.Books.AnyAsync())
            {
                var books = new[]
                {
                    new Book { Title = "Frankenstein", Author = "Mary Shelley", Category = "science", ImageUrl = "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg" },
                    new Book { Title = "The Time Machine", Author = "H. G. Wells", Category = "science", ImageUrl = "https://www.gutenberg.org/cache/epub/35/pg35.cover.medium.jpg" },
                    new Book { Title = "The Republic", Author = "Plato", Category = "science", ImageUrl = "https://www.gutenberg.org/cache/epub/1497/pg1497.cover.medium.jpg" },
                };
                await context.Books.AddRangeAsync(books);
            }

            if (!await context.Users.AnyAsync())
            {
                var admin = new User
                {
                    Username = "admin",
                    Email = "admin@example.com",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("admin"),
                    Role = "Admin"
                };
                await context.Users.AddAsync(admin);
            }

            await context.SaveChangesAsync();
        }
    }
}

