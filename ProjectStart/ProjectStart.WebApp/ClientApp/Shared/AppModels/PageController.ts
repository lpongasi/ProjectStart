import { Api } from 'shared/Component/api';
import { ActionTypes, CreateStateAction } from 'shared/Component/common';


// State for post: api/Page/
export const postIndexActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.Admin.PageController.Index.post');
// post: api/Page/
export const postIndex = (): Promise<any> => Api('post', `/api/Page/`, null, postIndexActions);

