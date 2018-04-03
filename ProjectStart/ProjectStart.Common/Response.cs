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
}
