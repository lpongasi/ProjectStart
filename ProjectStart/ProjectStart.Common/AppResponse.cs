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
    public class PayloadResponse<T> : Response
    {
        public PayloadResponse(T payload, string message = null, IDictionary<string, string> errors = null) : base(message, errors)
        {
            Payload = payload;
        }
        public T Payload { get; set; }
    }
    public static class ResponseExtension
    {
        public static PayloadResponse<T> ToResponse<T>(this T payload, bool success = true, string message = null, IDictionary<string, string> errors = null)
            => new PayloadResponse<T>(payload, message, errors);
    }
}
