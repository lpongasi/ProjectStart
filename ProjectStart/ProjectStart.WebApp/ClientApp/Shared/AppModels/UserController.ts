import { UserViewModel } from 'shared/AppModels/UserViewModel';
import { Api } from 'shared/Component/api';
import { IResponse, IResponseData } from 'shared/Component/response';


// State for get: api/User
// get: api/User
export const getUserActionId = 'ProjectStart.WebApp.Controllers.Admin.UserController.GetUser.get';
export const getUser = (localData?: (data: UserViewModel[]) => void): Promise<UserViewModel[]> => Api(getUserActionId, 'get', `/api/User`, null, true , localData);

