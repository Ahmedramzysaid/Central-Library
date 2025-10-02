using AutoMapper;
using CenteralLibrary.Application.DTOs.Categories;
using CenteralLibrary.Domain.Entities;
using CenteralLibrary.Infrastructure.UnitOfWork;
using Microsoft.AspNetCore.Mvc;

namespace CenteralLibrary.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CategoriesController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryDto>>> GetAll(CancellationToken cancellationToken)
        {
            var categories = await _unitOfWork.Categories.GetAllAsync(cancellationToken);
            return Ok(_mapper.Map<IEnumerable<CategoryDto>>(categories));
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<CategoryDto>> GetById(Guid id, CancellationToken cancellationToken)
        {
            var category = await _unitOfWork.Categories.GetByIdAsync(id, cancellationToken);
            if (category == null) return NotFound();
            return Ok(_mapper.Map<CategoryDto>(category));
        }

        [HttpPost]
        public async Task<ActionResult<CategoryDto>> Create([FromBody] CreateCategoryDto dto, CancellationToken cancellationToken)
        {
            var category = _mapper.Map<Category>(dto);
            await _unitOfWork.Categories.AddAsync(category, cancellationToken);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            var result = _mapper.Map<CategoryDto>(category);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] UpdateCategoryDto dto, CancellationToken cancellationToken)
        {
            var existing = await _unitOfWork.Categories.GetByIdAsync(id, cancellationToken);
            if (existing == null) return NotFound();
            _mapper.Map(dto, existing);
            _unitOfWork.Categories.Update(existing);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return NoContent();
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id, CancellationToken cancellationToken)
        {
            var existing = await _unitOfWork.Categories.GetByIdAsync(id, cancellationToken);
            if (existing == null) return NotFound();
            _unitOfWork.Categories.Remove(existing);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return NoContent();
        }
    }
}

