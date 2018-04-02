import { Api } from 'shared/Component/api';


// State for post: api/Page/
// post: api/Page/
export const postIndexActionId = 'ProjectStart.WebApp.Controllers.Admin.PageController.Index.post';
export const postIndex = (localData?: (data: any) => void): Promise<any> => Api(postIndexActionId, 'post', `/api/Page/`, null, true , localData);
// State for post: api/Page/
// post: api/Page/
export const postFormActionId = 'ProjectStart.WebApp.Controllers.Admin.PageController.Form.post';
export const postForm = (localData?: (data: any) => void): Promise<any> => Api(postFormActionId, 'post', `/api/Page/`, null, true , localData);

