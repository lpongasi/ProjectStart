${
    // Enable extension methods by adding using Typewriter.Extensions.*
    using Typewriter.Extensions.Types;
    // Custom extension methods can be used in the template by adding a $ prefix e.g. $LoudName
    string LoudName(Property property)
    {
        return property.Name.ToUpperInvariant();
    }
    
       bool HasBaseClass(Class c)
    {
        return c.BaseClass != null;
    }
}$Classes(*Response)[/**
 * Interface for: $FullName
 */
export interface I$Name$TypeParameters $BaseClass[extends I$Name$TypeArguments] {$Properties[
    $name: $Type;]
}
/**
 * Base view model for $FullName
 */
export class $Name$TypeParameters $BaseClass[extends $Name$TypeArguments] implements I$Name$TypeArguments {$Properties[
    $name: $Type;]
    constructor() {
    $HasBaseClass[super();][// nothing]
    }
}]