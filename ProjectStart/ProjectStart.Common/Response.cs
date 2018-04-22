using ProjectStart.Common.Constants;
using System.Collections.Generic;
using System.Linq;

namespace ProjectStart.Common
{
    public class Response
    {
        public Response(string message = null, IDictionary<string, string> errors = null)
        {
            Message = message;
            Errors = errors;
        }
        public bool Success => !Error;
        public bool Error => Errors != null && Errors.Any();
        public string Message { get; set; }
        public IDictionary<string, string> Errors { get; set; }
    }
    public class Response<T> : Response
    {
        public Response(T data, string message = null, IDictionary<string, string> errors = null)
        : base(message, errors)
        {
            Data = data;
        }
        public T Data { get; set; }
    }

    public abstract class ResponseTypes
    {
        public virtual Response Success(string message = null)
        {
            return new Response(message);
        }
        public virtual Response Error(string message = null)
        {
            return new Response(null, new Dictionary<string, string> { { ResponseConstants.GlobalError, message } });
        }
        public virtual Response Error(IDictionary<string, string> errors = null)
        {
            return new Response(null, errors);
        }
        public virtual Response<T> Error<T>(T data, string message = null, IDictionary<string, string> errors = null) where T : class
        {
            return new Response<T>(data, message, errors);
        }
        public virtual Response<T> Success<T>(T data, string message = null) where T : class
        {
            return new Response<T>(data, message);
        }
    }
}
