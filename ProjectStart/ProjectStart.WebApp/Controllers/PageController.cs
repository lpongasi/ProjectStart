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
using System.Data;
using Dapper;
using ProjectStart.Entity.Resource;

namespace ProjectStart.WebApp.Controllers
{
    public class PageController : Controller
    {
        private readonly CmsDbContext _context;

        public PageController(CmsDbContext context)
        {
            _context = context;
        }
        
        public IActionResult Index(string url, [FromQuery]bool isJson = false)
        {
            var page = _context.DbConnection.QueryFirstOrDefault<PageDataViewModel>(SqlResource.GetPageData, new { url });

            return isJson
                ? (IActionResult)Json(new Response<PageDataViewModel>(page))
                : View("MainBody", page);
        }
    }
}