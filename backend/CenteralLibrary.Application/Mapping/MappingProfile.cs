using AutoMapper;
using CenteralLibrary.Application.DTOs.Books;
using CenteralLibrary.Application.DTOs.Categories;
using CenteralLibrary.Domain.Entities;

namespace CenteralLibrary.Application.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Book, BookDto>().ReverseMap();
            CreateMap<CreateBookDto, Book>();
            CreateMap<UpdateBookDto, Book>();

            CreateMap<Category, CategoryDto>().ReverseMap();
            CreateMap<CreateCategoryDto, Category>();
            CreateMap<UpdateCategoryDto, Category>();
        }
    }
}

