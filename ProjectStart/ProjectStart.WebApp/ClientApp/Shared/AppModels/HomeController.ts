import { Api } from 'shared/Component/api';


// State for post: api/Home/
// post: api/Home/
export const postIndexActionId = 'ProjectStart.WebApp.Controllers.HomeController.Index.post';
export const postIndex = (): Promise<any> => Api(`postIndexActionId`, 'post', `/api/Home/`, null);
// State for post: api/Home/
// post: api/Home/
export const postAboutActionId = 'ProjectStart.WebApp.Controllers.HomeController.About.post';
export const postAbout = (): Promise<any> => Api(`postAboutActionId`, 'post', `/api/Home/`, null);
// State for post: api/Home/
// post: api/Home/
export const postContactActionId = 'ProjectStart.WebApp.Controllers.HomeController.Contact.post';
export const postContact = (): Promise<any> => Api(`postContactActionId`, 'post', `/api/Home/`, null);
// State for post: api/Home/
// post: api/Home/
export const postErrorActionId = 'ProjectStart.WebApp.Controllers.HomeController.Error.post';
export const postError = (): Promise<any> => Api(`postErrorActionId`, 'post', `/api/Home/`, null);

