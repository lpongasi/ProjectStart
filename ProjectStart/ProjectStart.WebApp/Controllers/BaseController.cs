using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectStart.Common;
using AppResponse = ProjectStart.Common.Response;

namespace ProjectStart.WebApp.Controllers
{
    public class BaseController : Controller
    {
        protected AppResponse CreateError(string message = null, IDictionary<string, string> errors = null)
        {
            Response.StatusCode = 400;
            return AppResponse.CreateError(message, errors);
        }
        protected GenericResponse<T> CreateErrorPayload<T>(T payload, string message = null, IDictionary<string, string> errors = null)
        {
            Response.StatusCode = 400;
            return new GenericResponse<T>(payload, message, errors);
        }
        protected AppResponse Success(string message)
        {
            return AppResponse.Create(message);
        }
        protected GenericResponse<T> SuccessPayload<T>(T payload, string message = null)
        {
            return new GenericResponse<T>(payload, message);
        }
    }
}