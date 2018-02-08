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
          "UserLoginInfo"
      };
    }
    string TypeGenerator(Property p){    
     return AnyProperties().Contains(p.Type.Name.TrimEnd('[',']'))? p.Type.Name.Contains("[")? "any[]":"any" : p.Type.Name;
    }
    string Imports(Class c){
      List<string> neededImports = new List<string>();
      neededImports.AddRange(new []{
      "import { AxiosPromise } from 'axios';",
      "import { Api } from 'shared/Component/api';",
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
                neededImports.Add("import { " + e.Type.OriginalName +" } from 'shared/AppModels/" + e.Type.OriginalName + "';");  
                e.Type.TypeArguments.Where(w=>!w.IsPrimitive).ToList().ForEach(tp=>{
                    neededImports.Add("import { " + tp.Name +" } from 'shared/AppModels/" + tp.Name + "';");                
                });   
            }            
        }
        e.Parameters.Where(p=>!p.Type.IsPrimitive).ToList().ForEach(pe=>{
            neededImports.Add("import { " + pe.Type.Name.TrimEnd('[',']') + " } from 'shared/AppModels/" + pe.Type.Name.TrimEnd('[',']') + "';");
        });
      });
     if (c.BaseClass != null && c.BaseClass.Name != "Controller") { 
	   neededImports.Add("import { " + c.BaseClass.Name +", I" + c.BaseClass.Name +"} from 'shared/AppModels/" + c.BaseClass.Name + "';");
     }
      return neededImports.Any() ? String.Join("\r\n", neededImports.OrderBy(o=>o.Substring(o.IndexOf("from"))).Distinct()) + "\r\n":"";
    }
}$Classes(*Controller)[$Imports
$Methods[
// $HttpMethod: $Url
export const $name$HttpMethod = ($Parameters[$name: $Type][, ]): AxiosPromise<$ReturnType> => Api('$HttpMethod', `/$Url`, $RequestData);]]

