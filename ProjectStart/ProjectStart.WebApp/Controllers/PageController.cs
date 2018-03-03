using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectStart.ViewModel;
using ProjectStart.Common.ViewModel;
using ProjectStart.Entity;
using ProjectStart.WebApp.Extensions;
using ProjectStart.Common;

namespace ProjectStart.WebApp.Controllers
{
    public class PageController : Controller
    {
        private readonly ApplicationDbContext _context;

        public PageController(ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Index(string url, [FromQuery]bool isJson = false)
        {
            var page = _context.PageData.Select(s => new PageDataViewModel { Name = s.Name, Description = s.Description, Title = s.Title, NameUrl = s.ParentUrl }).FirstOrDefault(w => w.NameUrl.Equals(url));
            return isJson
                ? (IActionResult)Json(new Response<PageDataViewModel>(page))
                : View("MainBody", page);
        }
    }
}