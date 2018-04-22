using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProjectStart.Common;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Linq;
using ProjectStart.Common.Constants;
using ProjectStart.Entity;
using ProjectStart.Repository;
using AutoMapper;

namespace ProjectStart.WebApp.Controllers
{
    public class BaseController : Controller
    {
        protected readonly IUnitOfWork CurrentService;
        protected readonly IMapper CurrentMapper;
        public BaseController() { }
        public BaseController(IUnitOfWork currentService)
        {
            CurrentService = currentService;
        }
        public BaseController(IUnitOfWork currentService, IMapper currentMapper)
        {
            CurrentService = currentService;
            CurrentMapper = currentMapper;
        }
        protected void SetResponse(bool success)
        {
            Response.StatusCode = success ? 200 : 400;
        }
        protected void SetResponseError()
        {
            Response.StatusCode = 400;
        }
        protected void SetResponseSuccess()
        {
            Response.StatusCode = 200;
        }
        protected Response Success(string message = null)
        {
            SetResponseSuccess();
            return new Response(message);
        }
        protected Response Error(string message = null)
        {
            SetResponseSuccess();
            return new Response(null, new Dictionary<string, string> { { ResponseConstants.GlobalError , message } });
        }
        protected Response Error(IDictionary<string, string> errors = null)
        {
            SetResponseSuccess();
            return new Response(null, errors);
        }
        protected Response ErrorState(ModelStateDictionary errors = null)
        {
            SetResponseSuccess();
            return new Response(null, errors.ToDictionary(k => string.IsNullOrEmpty(k.Key) ? ResponseConstants.GlobalError : k.Key, v => string.Join(", ", v.Value.Errors.Select(s => s.ErrorMessage))));
        }
        protected Response<T> ErrorState<T>(T data, string message = null, ModelStateDictionary errors = null) where T : class
        {
            return Error(data, message, errors.ToDictionary(k => string.IsNullOrEmpty(k.Key) ? ResponseConstants.GlobalError : k.Key, v => string.Join(", ", v.Value.Errors.Select(s => s.ErrorMessage))));
        }
        protected Response<T> Error<T>(T data, string message = null, IDictionary<string, string> errors = null) where T : class
        {
            SetResponseError();
            return new Response<T>(data, message, errors);
        }
        protected Response<T> Success<T>(T data, string message = null) where T : class
        {
            SetResponseSuccess();
            return new Response<T>(data, message);
        }
    }
}