import { Api } from 'shared/Component/api';
import { ActionTypes, CreateStateAction } from 'shared/Component/common';


// State for post: api/Page/?url=${encodeURIComponent(url)}&isJson=${isJson}
export const postIndexActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.PageController.Index.post');
// post: api/Page/?url=${encodeURIComponent(url)}&isJson=${isJson}
export const postIndex = (url: string, isJson: boolean = false): Promise<any> => Api('post', `/api/Page/?url=${encodeURIComponent(url)}&isJson=${isJson}`, null, postIndexActions);

