import { Api } from 'shared/Component/api';
import { IResponse, IResponseData } from 'shared/Component/response';


// State for post: api/Home/
// post: api/Home/
export const postIndexActionId = 'ProjectStart.WebApp.Controllers.HomeController.Index.post';
export const postIndex = (localData?: (data: any) => void): Promise<any> => Api(postIndexActionId, 'post', `/api/Home/`, null, true , localData);
// State for post: api/Home/
// post: api/Home/
export const postAboutActionId = 'ProjectStart.WebApp.Controllers.HomeController.About.post';
export const postAbout = (localData?: (data: any) => void): Promise<any> => Api(postAboutActionId, 'post', `/api/Home/`, null, true , localData);
// State for post: api/Home/
// post: api/Home/
export const postContactActionId = 'ProjectStart.WebApp.Controllers.HomeController.Contact.post';
export const postContact = (localData?: (data: any) => void): Promise<any> => Api(postContactActionId, 'post', `/api/Home/`, null, true , localData);
// State for post: api/Home/
// post: api/Home/
export const postErrorActionId = 'ProjectStart.WebApp.Controllers.HomeController.Error.post';
export const postError = (localData?: (data: any) => void): Promise<any> => Api(postErrorActionId, 'post', `/api/Home/`, null, true , localData);

