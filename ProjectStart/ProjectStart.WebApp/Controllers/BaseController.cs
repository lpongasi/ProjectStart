using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProjectStart.Common;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Linq;
using ProjectStart.Common.Constants;

namespace ProjectStart.WebApp.Controllers
{
    public class BaseController : Controller
    {
        protected Response Success(string message = null)
        {
            Response.StatusCode = 200;
            return new Response(message);
        }
        protected Response Error(string message = null)
        {
            Response.StatusCode = 200;
            return new Response(null, new Dictionary<string, string> { { ResponseConstants.GlobalError , message } });
        }
        protected Response Error(IDictionary<string, string> errors = null)
        {
            Response.StatusCode = 200;
            return new Response(null, errors);
        }
        protected Response ErrorState(ModelStateDictionary errors = null)
        {
            Response.StatusCode = 200;
            return new Response(null, errors.ToDictionary(k => string.IsNullOrEmpty(k.Key) ? ResponseConstants.GlobalError : k.Key, v => string.Join(", ", v.Value.Errors.Select(s => s.ErrorMessage))));
        }
        protected Response<T> ErrorState<T>(T data, string message = null, ModelStateDictionary errors = null) where T : class
        {
            return Error(data, message, errors.ToDictionary(k => string.IsNullOrEmpty(k.Key) ? ResponseConstants.GlobalError : k.Key, v => string.Join(", ", v.Value.Errors.Select(s => s.ErrorMessage))));
        }
        protected Response<T> Error<T>(T data, string message = null, IDictionary<string, string> errors = null) where T : class
        {
            Response.StatusCode = 400;
            return new Response<T>(data, message, errors);
        }
        protected Response<T> Success<T>(T data, string message = null) where T : class
        {
            Response.StatusCode = 200;
            return new Response<T>(data, message);
        }
    }
}