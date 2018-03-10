import { Api } from 'shared/Component/api';
import { ActionTypes, CreateStateAction } from 'shared/Component/common';


// State for post: api/Home/
export const postIndexActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.Admin.HomeController.Index.post');
// post: api/Home/
export const postIndex = (): Promise<any> => Api('post', `/api/Home/`, null, postIndexActions);

