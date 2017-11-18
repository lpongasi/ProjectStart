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

        public bool Success => Errors == null || Errors.Any();
        public IDictionary<string, string> Errors { get; set; }
        public string Message { get; set; }
        public static Response Create(string message = null, IDictionary<string, string> errors = null)
            => new Response(message, errors);
    }
    public class Response<T> : Response
    {
        public Response(T data, string message = null, IDictionary<string, string> errors = null) : base(message, errors)
        {
            Data = data;
        }
        public T Data { get; set; }
    }
    public static class ResponseExtension
    {
        public static Response<T> ToResponse<T>(this T data, bool success = true, string message = null, IDictionary<string, string> errors = null)
            => new Response<T>(data, message, errors);
    }
}
