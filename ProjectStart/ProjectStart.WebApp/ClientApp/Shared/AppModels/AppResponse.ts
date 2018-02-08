/**
 * Interface for: ProjectStart.Common.Response
 */
export interface IResponse  {
    success: boolean;
    errors: { [key: string]: string; };
    message: string;
}
export class Response  implements IResponse {
    success: boolean;
    errors: { [key: string]: string; };
    message: string;
}
/**
 * Interface for: ProjectStart.Common.PayloadResponse<T>
 */
export interface IPayloadResponse<T> extends IResponse {
    payload: T;
}
export class PayloadResponse<T> extends Response implements IPayloadResponse<T> {
    payload: T;
}

