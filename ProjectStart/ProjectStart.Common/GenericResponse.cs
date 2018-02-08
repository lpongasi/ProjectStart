using System.Collections.Generic;
using System.Linq;

namespace ProjectStart.Common
{
    public class GenericResponse<T> : Response
    {
        public GenericResponse(T payload, string message = null, IDictionary<string, string> errors = null) : base(message, errors)
        {
            Payload = payload;
        }
        public T Payload { get; set; }
    }
    public static class ResponseExtension
    {
        public static GenericResponse<T> ToResponse<T>(this T payload, bool success = true, string message = null, IDictionary<string, string> errors = null)
            => new GenericResponse<T>(payload, message, errors);
    }
}
