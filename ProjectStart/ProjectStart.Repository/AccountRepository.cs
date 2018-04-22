using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using ProjectStart.Common;
using ProjectStart.Common.Resource;
using ProjectStart.Entity;
using ProjectStart.ViewModel.AccountViewModels;
using ProjectStart.ViewModel.ManageViewModels;
using ProjectStart.WebApp.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ProjectStart.Repository
{
    public class AccountRepository : ResponseTypes
    {
        private readonly IServiceProvider _service;
        private readonly ILogger _logger;
        public AccountRepository(
            IServiceProvider service,
            ILogger<AccountRepository> logger)
        {
            _service = service;
            _logger = logger;
        }
        private T Initialize<T>(ref T serviceInitialize) where T : class
        {
            return serviceInitialize ?? (serviceInitialize = (T)_service.GetService(typeof(T)));
        }
        private T GetService<T>() where T : class
        {
            return _service.GetService(typeof(T)) as T;
        }
        public UserManager<ApplicationUser> UserManager => GetService<UserManager<ApplicationUser>>();
        public SignInManager<ApplicationUser> SignInManager => GetService<SignInManager<ApplicationUser>>();
        public async Task<Response> Login(LoginViewModel model)
        {
            var result = await SignInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: false);
            if (result.Succeeded)
            {
                return Success(string.Empty);
            }

            if (result.RequiresTwoFactor)
            {
                return Error(MessageResource.UserRequiresTwoFactor);
            }
            if (result.IsLockedOut)
            {
                return Error(MessageResource.UserLockout);
            }
            else
            {
                return Error(MessageResource.InvalidUser);
            }
        }
        
    }
}
