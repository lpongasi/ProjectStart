import { PageDataEntity } from 'shared/AppModels/PageDataEntity';
import { Api } from 'shared/Component/api';
import { ActionTypes, CreateStateAction } from 'shared/Component/common';


// State for get: api/PageData
export const getPageDataActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.Api.PageDataController.GetPageData.get');
// get: api/PageData
export const getPageData = (): Promise<PageDataEntity[]> => Api('get', `/api/PageData`, null, getPageDataActions);
// State for get: api/PageData/${encodeURIComponent(id)}
export const getPageDataActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.Api.PageDataController.GetPageData.get');
// get: api/PageData/${encodeURIComponent(id)}
export const getPageData = (id: string): Promise<any> => Api('get', `/api/PageData/${encodeURIComponent(id)}`, null, getPageDataActions);
// State for put: api/PageData/${encodeURIComponent(id)}
export const putPageDataActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.Api.PageDataController.PutPageData.put');
// put: api/PageData/${encodeURIComponent(id)}
export const putPageData = (id: string, pageData: PageDataEntity): Promise<any> => Api('put', `/api/PageData/${encodeURIComponent(id)}`, pageData, putPageDataActions);
// State for post: api/PageData
export const postPageDataActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.Api.PageDataController.PostPageData.post');
// post: api/PageData
export const postPageData = (pageData: PageDataEntity): Promise<any> => Api('post', `/api/PageData`, pageData, postPageDataActions);
// State for delete: api/PageData/${encodeURIComponent(id)}
export const deletePageDataActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.Api.PageDataController.DeletePageData.delete');
// delete: api/PageData/${encodeURIComponent(id)}
export const deletePageData = (id: string): Promise<any> => Api('delete', `/api/PageData/${encodeURIComponent(id)}`, null, deletePageDataActions);

