using System.Collections.Generic;
using System.Linq;

namespace ProjectStart.Common
{
    public class GenericResponse<T> : Response
    {
        public GenericResponse(T data, string message = null, IDictionary<string, string> errors = null) : base(message, errors)
        {
            Data = data;
        }
        public T Data { get; set; }
    }
    public static class ResponseExtension
    {
        public static GenericResponse<T> ToResponse<T>(this T data, bool success = true, string message = null, IDictionary<string, string> errors = null)
            => new GenericResponse<T>(data, message, errors);
    }
}
