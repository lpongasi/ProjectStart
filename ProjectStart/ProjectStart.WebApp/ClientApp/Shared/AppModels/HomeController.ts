import { Api } from 'shared/Component/api';


// State for post: api/Home/
// post: api/Home/
export const postIndexActionId = 'ProjectStart.WebApp.Controllers.Admin.HomeController.Index.post';
export const postIndex = (localData?: (data: any) => void): Promise<any> => Api(postIndexActionId, 'post', `/api/Home/`, null, true , localData);

