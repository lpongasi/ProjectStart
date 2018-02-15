using System.Collections.Generic;
using System.Linq;

namespace ProjectStart.Common
{
    public class Response
    {
        public const string GlobalError = "globalError";
        public Response(string message = null, IDictionary<string, string> errors = null)
        {
            Message = message;
            Errors = errors;
        }
        public bool Success => Errors == null || !Errors.Any();
        public bool Error => Errors != null && Errors.Any();
        public IDictionary<string, string> Errors { get; set; }
        public string Message { get; set; }
        public static Response Create(string message = null, IDictionary<string, string> errors = null)
            => new Response(message, errors);
        public static Response CreateError(string message = null, IDictionary<string, string> errors = null)
        {
            errors = errors ?? new Dictionary<string, string>();
            if (!string.IsNullOrEmpty(message))
            {
                errors.Add(GlobalError, message);
            }
           return new Response(errors: errors);
        }
    } 
}
