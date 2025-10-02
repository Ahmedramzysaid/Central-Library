using AutoMapper;
using CenteralLibrary.Application.DTOs.Books;
using CenteralLibrary.Domain.Entities;
using CenteralLibrary.Infrastructure.UnitOfWork;
using Microsoft.AspNetCore.Mvc;

namespace CenteralLibrary.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public BooksController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookDto>>> GetAll(CancellationToken cancellationToken)
        {
            var books = await _unitOfWork.Books.GetAllAsync(cancellationToken);
            return Ok(_mapper.Map<IEnumerable<BookDto>>(books));
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<BookDto>> GetById(Guid id, CancellationToken cancellationToken)
        {
            var book = await _unitOfWork.Books.GetByIdAsync(id, cancellationToken);
            if (book == null) return NotFound();
            return Ok(_mapper.Map<BookDto>(book));
        }

        [HttpPost]
        public async Task<ActionResult<BookDto>> Create([FromBody] CreateBookDto dto, CancellationToken cancellationToken)
        {
            var book = _mapper.Map<Book>(dto);
            await _unitOfWork.Books.AddAsync(book, cancellationToken);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            var result = _mapper.Map<BookDto>(book);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] UpdateBookDto dto, CancellationToken cancellationToken)
        {
            var existing = await _unitOfWork.Books.GetByIdAsync(id, cancellationToken);
            if (existing == null) return NotFound();
            _mapper.Map(dto, existing);
            _unitOfWork.Books.Update(existing);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return NoContent();
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id, CancellationToken cancellationToken)
        {
            var existing = await _unitOfWork.Books.GetByIdAsync(id, cancellationToken);
            if (existing == null) return NotFound();
            _unitOfWork.Books.Remove(existing);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return NoContent();
        }
    }
}

