import { AxiosPromise } from 'axios';
import { void } from 'shared/AppModels/void';
import { Api } from 'shared/Component/api';


// get: api/Node
export const getget = (): AxiosPromise<string[]> => Api('get', `/api/Node`, null);
// get: api/Node/${id}
export const getget = (id: number): AxiosPromise<string> => Api('get', `/api/Node/${id}`, null);
// post: api/Node
export const postpost = (value: string): AxiosPromise<void> => Api('post', `/api/Node`, value);
// put: api/Node/${id}
export const putput = (id: number, value: string): AxiosPromise<void> => Api('put', `/api/Node/${id}`, value);
// delete: api/Node/${id}
export const deletedelete = (id: number): AxiosPromise<void> => Api('delete', `/api/Node/${id}`, null);

