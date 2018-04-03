import { PageDataEntity } from 'shared/AppModels/PageDataEntity';
import { Api } from 'shared/Component/api';
import { IResponse, IResponseData } from 'shared/Component/response';


// State for get: api/PageData
// get: api/PageData
export const getPageDataActionId = 'ProjectStart.WebApp.Controllers.Api.PageDataController.GetPageData.get';
export const getPageData = (localData?: (data: PageDataEntity[]) => void): Promise<PageDataEntity[]> => Api(getPageDataActionId, 'get', `/api/PageData`, null, true , localData);
// State for get: api/PageData/GetPages?id=${encodeURIComponent(id)}
// get: api/PageData/GetPages?id=${encodeURIComponent(id)}
export const getPagesActionId = 'ProjectStart.WebApp.Controllers.Api.PageDataController.GetPages.get';
export const getPages = (id: string, localData?: (data: IResponseData<{ [key: string]: PageDataEntity; }>) => void): Promise<IResponseData<{ [key: string]: PageDataEntity; }>> => Api(getPagesActionId, 'get', `/api/PageData/GetPages?id=${encodeURIComponent(id)}`, null, true , localData);
// State for get: api/PageData/${encodeURIComponent(id)}
// get: api/PageData/${encodeURIComponent(id)}
export const getPageDataActionId = 'ProjectStart.WebApp.Controllers.Api.PageDataController.GetPageData.get';
export const getPageData = (id: string, localData?: (data: any) => void): Promise<any> => Api(getPageDataActionId, 'get', `/api/PageData/${encodeURIComponent(id)}`, null, true , localData);
// State for put: api/PageData/${encodeURIComponent(id)}
// put: api/PageData/${encodeURIComponent(id)}
export const putPageDataActionId = 'ProjectStart.WebApp.Controllers.Api.PageDataController.PutPageData.put';
export const putPageData = (id: string, pageData: PageDataEntity, localData?: (data: any) => void): Promise<any> => Api(putPageDataActionId, 'put', `/api/PageData/${encodeURIComponent(id)}`, pageData, true , localData);
// State for post: api/PageData
// post: api/PageData
export const postPageDataActionId = 'ProjectStart.WebApp.Controllers.Api.PageDataController.PostPageData.post';
export const postPageData = (pageData: PageDataEntity, localData?: (data: IResponseData<PageDataEntity>) => void): Promise<IResponseData<PageDataEntity>> => Api(postPageDataActionId, 'post', `/api/PageData`, pageData, true , localData);
// State for delete: api/PageData/${encodeURIComponent(id)}
// delete: api/PageData/${encodeURIComponent(id)}
export const deletePageDataActionId = 'ProjectStart.WebApp.Controllers.Api.PageDataController.DeletePageData.delete';
export const deletePageData = (id: string, localData?: (data: any) => void): Promise<any> => Api(deletePageDataActionId, 'delete', `/api/PageData/${encodeURIComponent(id)}`, null, true , localData);

