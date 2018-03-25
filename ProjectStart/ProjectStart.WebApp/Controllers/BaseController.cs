using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProjectStart.Common;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Linq;

namespace ProjectStart.WebApp.Controllers
{
    public class BaseController : Controller
    {
        protected Response<T> ErrorState<T>(T data, string message = null, ModelStateDictionary errors = null)
        {
            return Error(data, message, errors.ToDictionary(k => k.Key, v => string.Join(", ", v.Value.Errors.Select(s => s.ErrorMessage))));
        }
        protected Response<T> Error<T>(T data, string message = null, IDictionary<string, string> errors = null)
        {
            Response.StatusCode = 400;
            return new Response<T>(data, message, errors);
        }
        protected Response<T> Success<T>(T data, string message = null)
        {
            Response.StatusCode = 200;
            return new Response<T>(data, message);
        }
    }
}