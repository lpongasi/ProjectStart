${
    // Enable extension methods by adding using Typewriter.Extensions.*
    //using System.Linq;
    using Typewriter.Extensions.Types;
	using Typewriter.Extensions.WebApi;

	string ReturnType(Method m) => m.Type.Name == "IActionResult" ? "any" : m.Type.Name;
    string ServiceName(Class c) => c.Name.Replace("ApiController", "Controller");
    string ParentServiceName(Method m) => ServiceName((Class)m.Parent);
   List<string> AnyProperties(){
     return new List<string>{
          "AuthenticationScheme",
          "UserLoginInfo",
          "BaseController",
      };
    }
    string Method(Method m){
     var httpMethod = m.HttpMethod();
     return m.name.Equals(httpMethod) || m.name.Contains(httpMethod) ? m.name : $"{httpMethod}{m.Name}";
    }
    string MethodAction(Method m){
     return $"{Method(m)}ActionId";
    }
    string Property(Parameter p){
       return $"{p.name}{(p.Type.IsNullable && !p.HasDefaultValue?"?":string.Empty)}: {p.Type}{(p.HasDefaultValue?$" = {p.DefaultValue}":string.Empty)}";
    }
    string CustomParameters(Method param){
      var parameters = new List<string>();
      parameters.AddRange(param.Parameters.Select(s=>Property(s)));
      return string.Join(", ",parameters);
    }
    string Imports(Class c){
      List<string> neededImports = new List<string>();
      neededImports.AddRange(new []{
      "import { Api } from 'shared/Component/api';"
      });
     neededImports.AddRange(c.Properties
	    .Where(p => !p.Type.IsPrimitive && p.Type.Name.TrimEnd('[',']') != c.Name && !AnyProperties().Contains(p.Type.Name.TrimEnd('[',']')))
	    .Select(p => "import { " + p.Type.Name.TrimEnd('[',']') + " } from 'shared/AppModels/" + p.Type.Name.TrimEnd('[',']') + "';").ToList());

      c.Methods.ToList().ForEach(e =>
      {
        if(!e.Type.IsPrimitive && e.Type.Name != "IActionResult") {
            if(!e.Type.IsGeneric || e.Type.IsEnumerable){
                neededImports.Add("import { " +  e.Type.Name.TrimEnd('[',']') + " } from 'shared/AppModels/" +  e.Type.Name.TrimEnd('[',']') + "';");   
            }else{               
                neededImports.Add("import { " + e.Type.OriginalName.TrimEnd('[',']') +" } from 'shared/AppModels/" + e.Type.OriginalName.TrimEnd('[',']') + "';");  
                e.Type.TypeArguments.Where(w=>!w.IsPrimitive).ToList().ForEach(tp=>{
                    neededImports.Add("import { " + tp.Name.TrimEnd('[',']') +" } from 'shared/AppModels/" + tp.Name.TrimEnd('[',']') + "';");                
                });   
            }            
        }
        e.Parameters.Where(p=>!p.Type.IsPrimitive).ToList().ForEach(pe=>{
            neededImports.Add("import { " + pe.Type.Name.TrimEnd('[',']') + " } from 'shared/AppModels/" + pe.Type.Name.TrimEnd('[',']') + "';");
        });
      });
     if (c.BaseClass != null && c.BaseClass.Name != "Controller" && c.BaseClass.Name != "BaseController") { 
      var baseImports = string.Join(", ",new List<string>{c.BaseClass.Name, $"I{c.BaseClass.Name}"}.OrderBy(o=>o));
	   neededImports.Add("import { " + baseImports +"} from 'shared/AppModels/" + c.BaseClass.Name + "';");
     }
      return neededImports.Any() ? String.Join("\r\n", neededImports.OrderBy(o=>o.Substring(o.IndexOf("from"))).Distinct()) + "\r\n":"";
    }
}$Classes(*Controller)[$Imports
$Methods[
// State for $HttpMethod: $Url
// $HttpMethod: $Url
export const $MethodAction = '$FullName.$HttpMethod';
export const $Method = ($CustomParameters): Promise<$ReturnType> => Api(`$MethodAction`, '$HttpMethod', `/$Url`, $RequestData);]]

