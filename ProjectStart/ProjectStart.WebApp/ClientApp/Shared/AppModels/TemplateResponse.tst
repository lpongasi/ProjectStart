${
    // Enable extension methods by adding using Typewriter.Extensions.*
    using Typewriter.Extensions.Types;

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

     neededImports.AddRange(c.Properties
	    .Where(p => !p.Type.IsPrimitive && p.Type.Name.TrimEnd('[',']') != c.Name && !AnyProperties().Contains(p.Type.Name.TrimEnd('[',']')) &&  p.Type.Name.TrimEnd('[',']') != "T")
	    .Select(p => "import { " + p.Type.Name.TrimEnd('[',']') + " } from 'shared/AppModels/" + p.Type.Name.TrimEnd('[',']') + "';").ToList());

      c.Methods.ToList().ForEach(e =>
      {
        e.Parameters.Where(p=>!p.Type.IsPrimitive).ToList().ForEach(pe=>{
            neededImports.Add("import { " + pe.Type.Name.TrimEnd('[',']') + " } from 'shared/AppModels/" + pe.Type.Name.TrimEnd('[',']') + "';");
        });
      });
     if (c.BaseClass != null && c.BaseClass.Name != "Controller") { 
	   neededImports.Add("import { " + c.BaseClass.Name +", I" + c.BaseClass.Name +"} from 'shared/AppModels/" + c.BaseClass.Name + "';");
     }
      return neededImports.Any() ? String.Join("\r\n", neededImports.OrderBy(o=>o.Substring(o.IndexOf("from"))).Distinct()) + "\r\n":"";
    }
}$Classes(*Response)[$Imports/**
 * Interface for: $FullName
 */
export interface I$Name$TypeParameters $BaseClass[extends I$Name$TypeArguments] {$Properties[
    $name: $TypeGenerator;]
}
export class $Name$TypeParameters $BaseClass[extends $Name$TypeArguments] implements I$Name$TypeArguments {$Properties[
    $name: $TypeGenerator;]
}
]
