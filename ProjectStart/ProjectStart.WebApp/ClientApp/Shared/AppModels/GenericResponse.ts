import { Response, IResponse} from 'shared/AppModels/Response';
/**
 * Interface for: ProjectStart.Common.GenericResponse<T>
 */
export interface IGenericResponse<T> extends IResponse {
    payload: T;
}
export class GenericResponse<T> extends Response implements IGenericResponse<T> {
    payload: T;
}

