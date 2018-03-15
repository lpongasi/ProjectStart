import { Api } from 'shared/Component/api';


// State for post: api/Page/?url=${encodeURIComponent(url)}&isJson=${isJson}
// post: api/Page/?url=${encodeURIComponent(url)}&isJson=${isJson}
export const postIndexActionId = 'ProjectStart.WebApp.Controllers.PageController.Index.post';
export const postIndex = (url: string, isJson: boolean = false): Promise<any> => Api(postIndexActionId, 'post', `/api/Page/?url=${encodeURIComponent(url)}&isJson=${isJson}`, null);

