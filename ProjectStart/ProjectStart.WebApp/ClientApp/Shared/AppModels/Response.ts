/**
 * Interface for: ProjectStart.Common.Response
 */
export interface IResponse  {
    success: boolean;
    error: boolean;
    errors: { [key: string]: string; };
    message: string;
}
export class Response  implements IResponse {
    success: boolean;
    error: boolean;
    errors: { [key: string]: string; };
    message: string;
}

