﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectStart.ViewModel.AccountViewModels;

namespace ProjectStart.WebApp.Controllers.Admin
{
    [Area("Admin")]
    public class PageController : Controller
    {
        public IActionResult Index()
        {
            return View("MainBody", null);
        }
    }
}