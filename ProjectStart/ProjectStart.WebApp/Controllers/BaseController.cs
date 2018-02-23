using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProjectStart.Common;
namespace ProjectStart.WebApp.Controllers
{
    public class BaseController : Controller
    {
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