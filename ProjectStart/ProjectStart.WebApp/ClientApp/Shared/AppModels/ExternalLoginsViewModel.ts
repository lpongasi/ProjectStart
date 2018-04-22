
export interface IExternalLoginsViewModel  {
    currentLogins: any[];
    otherLogins: any[];
    showRemoveButton: boolean;
    statusMessage: string;
}
export class ExternalLoginsViewModel  implements IExternalLoginsViewModel {
    currentLogins: any[];
    otherLogins: any[];
    showRemoveButton: boolean;
    statusMessage: string;
}
