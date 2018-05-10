using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectStart.Entity;
using ProjectStart.Repository;
using ProjectStart.ViewModel.AccountViewModels;
using AutoMapper;
using ProjectStart.Common.ViewModel;
using ProjectStart.Common;

namespace ProjectStart.WebApp.Controllers.Admin
{
    [Area("Admin")]
    [Produces("application/json")]
    public class UserController : BaseController
    {
        public UserController(IUnitOfWork currentService, IMapper currentMapper) : base(currentService, currentMapper)
        { }
        public IActionResult Index()
        {
            return View("MainBody", null);
        }
        [HttpGet]
        public Response<FilterDataViewModel<UserViewModel>> GetUser(
            [FromQuery] FilterViewModel filterQuery
            )
        {
            var filterData = CurrentService.UserRepository.GetAll<UserViewModel>(param: filterQuery);

            return Success(filterData);
        }
    }
}