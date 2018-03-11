import { PageDataEntity } from 'shared/AppModels/PageDataEntity';
import { Response } from 'shared/AppModels/Response';
import { Api } from 'shared/Component/api';


// State for get: api/PageData
// get: api/PageData
export const getPageDataActionId = 'ProjectStart.WebApp.Controllers.Api.PageDataController.GetPageData.get';
export const getPageData = (): Promise<PageDataEntity[]> => Api(`getPageDataActionId`, 'get', `/api/PageData`, null);
// State for get: api/PageData/GetPages?id=${encodeURIComponent(id)}
// get: api/PageData/GetPages?id=${encodeURIComponent(id)}
export const getPagesActionId = 'ProjectStart.WebApp.Controllers.Api.PageDataController.GetPages.get';
export const getPages = (id: string): Promise<Response<PageDataEntity[]>> => Api(`getPagesActionId`, 'get', `/api/PageData/GetPages?id=${encodeURIComponent(id)}`, null);
// State for get: api/PageData/${encodeURIComponent(id)}
// get: api/PageData/${encodeURIComponent(id)}
export const getPageDataActionId = 'ProjectStart.WebApp.Controllers.Api.PageDataController.GetPageData.get';
export const getPageData = (id: string): Promise<any> => Api(`getPageDataActionId`, 'get', `/api/PageData/${encodeURIComponent(id)}`, null);
// State for put: api/PageData/${encodeURIComponent(id)}
// put: api/PageData/${encodeURIComponent(id)}
export const putPageDataActionId = 'ProjectStart.WebApp.Controllers.Api.PageDataController.PutPageData.put';
export const putPageData = (id: string, pageData: PageDataEntity): Promise<any> => Api(`putPageDataActionId`, 'put', `/api/PageData/${encodeURIComponent(id)}`, pageData);
// State for post: api/PageData
// post: api/PageData
export const postPageDataActionId = 'ProjectStart.WebApp.Controllers.Api.PageDataController.PostPageData.post';
export const postPageData = (pageData: PageDataEntity): Promise<Response<PageDataEntity>> => Api(`postPageDataActionId`, 'post', `/api/PageData`, pageData);
// State for delete: api/PageData/${encodeURIComponent(id)}
// delete: api/PageData/${encodeURIComponent(id)}
export const deletePageDataActionId = 'ProjectStart.WebApp.Controllers.Api.PageDataController.DeletePageData.delete';
export const deletePageData = (id: string): Promise<any> => Api(`deletePageDataActionId`, 'delete', `/api/PageData/${encodeURIComponent(id)}`, null);

