using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectStart.Common;
using ProjectStart.Commerce;
using ProjectStart.Commerce.Entity;
using ProjectStart.Commerce.Model;

namespace ProjectStart.WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Category")]
    public class CategoryController : Controller
    {
        private readonly CommerceContext _context;

        public CategoryController(CommerceContext context)
        {
            _context = context;
        }

        // GET: api/Category
        [HttpGet]
        public AppResponse<IEnumerable<NodeModel>> GetNodes()
        {
            Response.StatusCode = 400;
            var node = _context.Nodes
                .Where(w=>!w.IsRemoved)
                .Select(s => new NodeModel
            {
                Id = s.Id,
                ParentId = s.ParentId,
                Name = s.Name
            }).ToList()
            .ToSubNodes();

            return node.ToResponse();
        }

        // GET: api/Category/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetNode([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var node = await _context.Nodes.SingleOrDefaultAsync(m => m.Id == id);

            if (node == null)
            {
                return NotFound();
            }

            return Ok(node);
        }

        // PUT: api/Category/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNode([FromRoute] int id, [FromBody] Node node)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != node.Id)
            {
                return BadRequest();
            }

            _context.Entry(node).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NodeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Category
        [HttpPost]
        public async Task<IActionResult> PostNode([FromBody] Node node)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Nodes.Add(node);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNode", new { id = node.Id }, node);
        }

        // DELETE: api/Category/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNode([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var node = await _context.Nodes.SingleOrDefaultAsync(m => m.Id == id);
            if (node == null)
            {
                return NotFound();
            }

            _context.Nodes.Remove(node);
            await _context.SaveChangesAsync();

            return Ok(node);
        }

        private bool NodeExists(int id)
        {
            return _context.Nodes.Any(e => e.Id == id);
        }
    }
}