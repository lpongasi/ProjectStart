using System.Collections.Generic;
using System.Linq;

namespace ProjectStart.Common
{
    public class Response<T>
    {
        public const string GlobalError = "globalError";
        public Response(T data, string message = null, IDictionary<string, string> errors = null)
        {
            Data = data;
            Message = message;
            Errors = errors;
        }
        public bool Success => !Error;
        public bool Error => Errors != null && Errors.Any();
        public string Message { get; set; }
        public IDictionary<string, string> Errors { get; set; }
        public T Data { get; set; }
    }
}
