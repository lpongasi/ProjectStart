/**
 * Interface for: ProjectStart.Common.Response<T>
 */
export interface IResponse<T>  {
    success: boolean;
    error: boolean;
    message: string;
    errors: { [key: string]: string; };
    data: T;
}
export class Response<T>  implements IResponse<T> {
    success: boolean;
    error: boolean;
    message: string;
    errors: { [key: string]: string; };
    data: T;
}

