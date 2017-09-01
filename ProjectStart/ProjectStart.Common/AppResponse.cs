using System.Collections.Generic;
using System.Linq;

namespace ProjectStart.Common
{
    public class AppResponse
    {
        private bool _success;
        public AppResponse(bool success = true, string message = null, IDictionary<string, string> errors = null)
        {
            Message = message;
            Success = success;
            Errors = errors;
        }

        public bool Success
        {
            get => _success && (Errors == null || !Errors.Any());
            set => _success = value;
        }

        public bool Error => !Success;
        public IDictionary<string, string> Errors { get; set; }
        public string Message { get; set; }
    }
    public class AppResponse<T> : AppResponse
    {
        public AppResponse(T data, bool success = true, string message = null, IDictionary<string, string> errors = null) : base(success, message, errors)
        {
            Data = data;
        }
        public T Data { get; set; }
    }
    public static class AppResponseExtension
    {
        public static AppResponse Create(this AppResponse response, bool success = true, string message = null, IDictionary<string, string> errors = null)
            => new AppResponse(success, message, errors);

        public static AppResponse<T> ToResponse<T>(this T data, bool success = true, string message = null, IDictionary<string, string> errors = null)
            => new AppResponse<T>(data, success, message, errors);
    }
}
