using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectStart.Commerce;
using ProjectStart.Commerce.Entity;
using ProjectStart.Commerce.Model;
using ProjectStart.Common;

namespace ProjectStart.WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Nodes")]
    public class NodesController : Controller
    {
        private readonly CommerceContext _context;

        public NodesController(CommerceContext context)
        {
            _context = context;
        }

        // GET: api/Nodes
        [HttpGet]
        public AppResponse<IEnumerable<NodeModel>> GetNodes()
        {
            //var nodes =
            //    Enumerable.Range(1, 10).Select(n => new Node
            //    {
            //        Code = $"C{n}",
            //        Name = $"TEST {n}",
            //        CreatedBy = "Loki",
            //        DateCreated = DateTime.Now,
            //        SubNodes = Enumerable.Range(1, 10).Select(sn => new Node
            //        {
            //            Code = $"C{n}-{sn}",
            //            Name = $"TEST {n}-{sn}",
            //            CreatedBy = "Loki",
            //            DateCreated = DateTime.Now,
            //        }).ToList()
            //    }).ToList();
            //_context.AddRange(nodes);
            //_context.SaveChanges();

            return _context.Nodes.Select(s=>new NodeModel
            {
                Id = s.Id,
                Code = s.Code,
                Name = s.Name,
                ParentId = s.ParentId
            }).ToList().ToSubNodes().ToResponse();
        }

        // GET: api/Nodes/5
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

        // PUT: api/Nodes/5
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

        // POST: api/Nodes
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

        // DELETE: api/Nodes/5
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