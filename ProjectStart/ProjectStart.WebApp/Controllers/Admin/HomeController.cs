using Microsoft.AspNetCore.Mvc;

namespace ProjectStart.WebApp.Controllers.Admin
{
    [Area("Admin")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}