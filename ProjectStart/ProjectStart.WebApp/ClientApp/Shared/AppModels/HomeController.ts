import { Api } from 'shared/Component/api';
import { ActionTypes, CreateStateAction } from 'shared/Component/common';


// State for post: api/Home/
export const postIndexActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.HomeController.Index.post');
// post: api/Home/
export const postIndex = (): Promise<any> => Api('post', `/api/Home/`, null, postIndexActions);
// State for post: api/Home/
export const postAboutActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.HomeController.About.post');
// post: api/Home/
export const postAbout = (): Promise<any> => Api('post', `/api/Home/`, null, postAboutActions);
// State for post: api/Home/
export const postContactActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.HomeController.Contact.post');
// post: api/Home/
export const postContact = (): Promise<any> => Api('post', `/api/Home/`, null, postContactActions);
// State for post: api/Home/
export const postErrorActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.HomeController.Error.post');
// post: api/Home/
export const postError = (): Promise<any> => Api('post', `/api/Home/`, null, postErrorActions);

