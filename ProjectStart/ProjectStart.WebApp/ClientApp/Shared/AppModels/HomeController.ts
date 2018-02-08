import { AxiosPromise } from 'axios';
import { IResponse } from 'shared/AppModels/AppResponse';
import { Api } from 'shared/Component/api';


// post: api/Home/
export const indexpost = (): AxiosPromise<IResponse> => Api('post', `/api/Home/`, null);
// post: api/Home/
export const aboutpost = (): AxiosPromise<IResponse> => Api('post', `/api/Home/`, null);
// post: api/Home/?page=${page}&pageSize=${pageSize}
export const nodepost = (page: number, pageSize: number): AxiosPromise<IResponse> => Api('post', `/api/Home/?page=${page}&pageSize=${pageSize}`, null);
// post: api/Home/
export const contactpost = (): AxiosPromise<IResponse> => Api('post', `/api/Home/`, null);
// post: api/Home/
export const errorpost = (): AxiosPromise<IResponse> => Api('post', `/api/Home/`, null);

