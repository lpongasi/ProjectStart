import { AxiosPromise } from 'axios';
import { IResponse } from 'shared/AppModels/AppResponse';
import { Api } from 'shared/Component/api';

export default class HomeController {
    // post: api/Home/
    public indexpost = (): AxiosPromise<IResponse> => Api('post', `/api/Home/`, null);
    // post: api/Home/
    public aboutpost = (): AxiosPromise<IResponse> => Api('post', `/api/Home/`, null);
    // post: api/Home/?page=${page}&pageSize=${pageSize}
    public nodepost = (page: number, pageSize: number): AxiosPromise<IResponse> => Api('post', `/api/Home/?page=${page}&pageSize=${pageSize}`, null);
    // post: api/Home/
    public contactpost = (): AxiosPromise<IResponse> => Api('post', `/api/Home/`, null);
    // post: api/Home/
    public errorpost = (): AxiosPromise<IResponse> => Api('post', `/api/Home/`, null);
}
