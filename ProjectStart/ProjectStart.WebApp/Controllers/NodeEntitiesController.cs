using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectStart.Common;
using ProjectStart.Entity;
using ProjectStart.Repository;

namespace ProjectStart.WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/NodeEntities")]
    public class NodeEntitiesController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public NodeEntitiesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/NodeEntities
        [HttpGet]
        public GenericResponse<IEnumerable<NodeEntity>> GetNode()
        {
            return _unitOfWork.NodeRepository.GetAll(
                output: input => new NodeEntity { Id = input.Id, Name = input.Name },
                predicate : model => string.IsNullOrEmpty(model.Name),
                order: input => input.OrderBy(o => o.Name),
                page: 1,
                pageSize: 10
                ).ToResponse();
        }

        //// GET: api/NodeEntities/5
        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetNodeEntity([FromRoute] string id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var nodeEntity = await _context.Node.SingleOrDefaultAsync(m => m.Id == id);

        //    if (nodeEntity == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(nodeEntity);
        //}

        //// PUT: api/NodeEntities/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutNodeEntity([FromRoute] string id, [FromBody] NodeEntity nodeEntity)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != nodeEntity.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(nodeEntity).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!NodeEntityExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/NodeEntities
        //[HttpPost]
        //public async Task<IActionResult> PostNodeEntity([FromBody] NodeEntity nodeEntity)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    _context.Node.Add(nodeEntity);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetNodeEntity", new { id = nodeEntity.Id }, nodeEntity);
        //}

        //// DELETE: api/NodeEntities/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteNodeEntity([FromRoute] string id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var nodeEntity = await _context.Node.SingleOrDefaultAsync(m => m.Id == id);
        //    if (nodeEntity == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Node.Remove(nodeEntity);
        //    await _context.SaveChangesAsync();

        //    return Ok(nodeEntity);
        //}

        //private bool NodeEntityExists(string id)
        //{
        //    return _context.Node.Any(e => e.Id == id);
        //}
    }
}