import { GenericResponse } from 'shared/AppModels/GenericResponse';
import { NodeEntity } from 'shared/AppModels/NodeEntity';
import { Api } from 'shared/Component/api';
import { ActionTypes, CreateStateAction } from 'shared/Component/common';


// State for get: api/NodeEntities
export const getListActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.NodeEntitiesController.List.get');
// get: api/NodeEntities
export const getList = (): Promise<GenericResponse<NodeEntity[]>> => Api('get', `/api/NodeEntities`, null, getListActions);
// State for post: api/NodeEntities
export const postNodeEntityActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.NodeEntitiesController.PostNodeEntity.post');
// post: api/NodeEntities
export const postNodeEntity = (nodeEntity: NodeEntity): Promise<GenericResponse<NodeEntity>> => Api('post', `/api/NodeEntities`, nodeEntity, postNodeEntityActions);

