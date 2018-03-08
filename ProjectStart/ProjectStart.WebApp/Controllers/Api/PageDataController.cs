using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectStart.Entity;
using ProjectStart.Entity.Cms;

namespace ProjectStart.WebApp.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/PageData")]
    public class PageDataController : Controller
    {
        private readonly CmsDbContext _context;

        public PageDataController(CmsDbContext context)
        {
            _context = context;
        }

        // GET: api/PageData
        [HttpGet]
        public IEnumerable<PageDataEntity> GetPageData()
        {
            return _context.PageData;
        }

        // GET: api/PageData/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPageData([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pageData = await _context.PageData.SingleOrDefaultAsync(m => m.Id == id);

            if (pageData == null)
            {
                return NotFound();
            }

            return Ok(pageData);
        }

        // PUT: api/PageData/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPageData([FromRoute] string id, [FromBody] PageDataEntity pageData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pageData.Id)
            {
                return BadRequest();
            }

            _context.Entry(pageData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PageDataExists(id))
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

        // POST: api/PageData
        [HttpPost]
        public async Task<IActionResult> PostPageData([FromBody] PageDataEntity pageData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.PageData.Add(pageData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPageData", new { id = pageData.Id }, pageData);
        }

        // DELETE: api/PageData/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePageData([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pageData = await _context.PageData.SingleOrDefaultAsync(m => m.Id == id);
            if (pageData == null)
            {
                return NotFound();
            }

            _context.PageData.Remove(pageData);
            await _context.SaveChangesAsync();

            return Ok(pageData);
        }

        private bool PageDataExists(string id)
        {
            return _context.PageData.Any(e => e.Id == id);
        }
    }
}