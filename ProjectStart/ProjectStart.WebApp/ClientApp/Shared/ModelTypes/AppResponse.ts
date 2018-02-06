/**
 * Interface for: ProjectStart.Common.Response
 */
export interface IResponse  {
    success: boolean;
    errors: { [key: string]: string; };
    message: string;
}
/**
 * Base view model for ProjectStart.Common.Response
 */
export class Response  implements IResponse {
    success: boolean;
    errors: { [key: string]: string; };
    message: string;
    constructor() {
    // nothing
    }
}/**
 * Interface for: ProjectStart.Common.Response<T>
 */
export interface IResponse<T> extends IResponse {
    data: T;
}
/**
 * Base view model for ProjectStart.Common.Response<T>
 */
export class Response<T> extends Response implements IResponse<T> {
    data: T;
    constructor() {
    super();
    }
}