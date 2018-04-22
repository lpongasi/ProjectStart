import { FilterDataViewModel } from 'shared/AppModels/FilterDataViewModel';
import { FilterQueryViewModel } from 'shared/AppModels/FilterQueryViewModel';
import { UserViewModel } from 'shared/AppModels/UserViewModel';
import { Api } from 'shared/Component/api';
import Response from 'shared/Component/response';


// State for post: api/User/
// post: api/User/
export const postIndexActionId = 'ProjectStart.WebApp.Controllers.Admin.UserController.Index.post';
export const postIndex = (localData?: (data: any) => void): Promise<any> => Api(postIndexActionId, 'post', `/api/User/`, null, true , localData);
// State for get: api/User/
// get: api/User/
export const getUserActionId = 'ProjectStart.WebApp.Controllers.Admin.UserController.GetUser.get';
export const getUser = (filterQuery: FilterQueryViewModel, localData?: (data: Response<FilterDataViewModel<UserViewModel>>) => void): Promise<Response<FilterDataViewModel<UserViewModel>>> => Api(getUserActionId, 'get', `/api/User/`, filterQuery, true , localData);

