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
namespace ProjectStart.WebApp.Controllers.Admin
{
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : BaseController
    {
        public UserController(IUnitOfWork currentService, IMapper currentMapper) : base(currentService, currentMapper)
        { }
        [HttpGet]
        public IEnumerable<UserViewModel> GetUser()
        {
            return CurrentService.UserRepository.GetAll(s => new UserViewModel { FirstName = s.FirstName });
        }
    }
}