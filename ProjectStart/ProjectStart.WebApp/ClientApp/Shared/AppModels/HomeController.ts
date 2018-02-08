import { AxiosPromise } from 'axios';
import { Api } from 'shared/Component/api';


// post: api/Home/
export const indexpost = (): AxiosPromise<any> => Api('post', `/api/Home/`, null);
// post: api/Home/
export const aboutpost = (): AxiosPromise<any> => Api('post', `/api/Home/`, null);
// post: api/Home/?page=${page}&pageSize=${pageSize}
export const nodepost = (page: number, pageSize: number): AxiosPromise<any> => Api('post', `/api/Home/?page=${page}&pageSize=${pageSize}`, null);
// post: api/Home/
export const contactpost = (): AxiosPromise<any> => Api('post', `/api/Home/`, null);
// post: api/Home/
export const errorpost = (): AxiosPromise<any> => Api('post', `/api/Home/`, null);

