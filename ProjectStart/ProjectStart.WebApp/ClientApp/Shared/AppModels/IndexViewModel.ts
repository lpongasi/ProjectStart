
export interface IIndexViewModel  {
    username: string;
    isEmailConfirmed: boolean;
    email: string;
    phoneNumber: string;
    statusMessage: string;
}
export class IndexViewModel  implements IIndexViewModel {
    username: string;
    isEmailConfirmed: boolean;
    email: string;
    phoneNumber: string;
    statusMessage: string;
}
