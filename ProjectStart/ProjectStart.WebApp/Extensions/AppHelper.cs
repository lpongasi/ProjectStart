using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectStart.WebApp.Extensions
{
    public static class AppHelper
    {
        public static readonly JsonSerializerSettings JsonSerializerSettings = new JsonSerializerSettings
        {
            Formatting = Formatting.None,
            ContractResolver = new CamelCasePropertyNamesContractResolver(),
            ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
            NullValueHandling = NullValueHandling.Ignore,
        };

        public static string ToJson<T>(this T @object)
            => JsonConvert.SerializeObject(
            @object,
            Formatting.None,
            JsonSerializerSettings
            );
        public static bool IsAjaxRequest(this HttpRequest request)
        {
            if (request?.Headers != null)
                return false;
            return request.Headers["X-Requested-With"] == "XMLHttpRequest";
        }
        public static string ToFirstUpperCase(this string value)
        {
            string newValue;
            if (string.IsNullOrEmpty(value.Trim()))
            {
                newValue = string.Empty;
            }
            else if (value.Length == 1)
            {
                newValue = value.ToUpper();
            }
            else
            {
                newValue = $"{char.ToUpper(value[0])}{value.ToLower().Substring(1)}";
            }
            return newValue;
        }
    }
}
