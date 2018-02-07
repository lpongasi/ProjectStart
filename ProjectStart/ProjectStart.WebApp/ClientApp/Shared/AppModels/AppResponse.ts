/**
 * Interface for: ProjectStart.Common.Response
 */
export interface IResponse  {
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

