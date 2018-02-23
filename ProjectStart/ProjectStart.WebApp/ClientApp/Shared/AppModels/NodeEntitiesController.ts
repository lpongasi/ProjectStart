import { NodeEntity } from 'shared/AppModels/NodeEntity';
import { Response } from 'shared/AppModels/Response';
import { Api } from 'shared/Component/api';
import { ActionTypes, CreateStateAction } from 'shared/Component/common';


// State for get: api/NodeEntities?page=${page}&pageSize=${pageSize}
export const getListActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.NodeEntitiesController.List.get');
// get: api/NodeEntities?page=${page}&pageSize=${pageSize}
export const getList = (page: number = 1, pageSize: number = 20): Promise<Response<NodeEntity[]>> => Api('get', `/api/NodeEntities?page=${page}&pageSize=${pageSize}`, null, getListActions);
// State for post: api/NodeEntities
export const postNodeEntityActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.NodeEntitiesController.PostNodeEntity.post');
// post: api/NodeEntities
export const postNodeEntity = (nodeEntity: NodeEntity): Promise<Response<NodeEntity>> => Api('post', `/api/NodeEntities`, nodeEntity, postNodeEntityActions);
// State for delete: api/NodeEntities/${encodeURIComponent(id)}
export const deleteNodeEntityActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.NodeEntitiesController.DeleteNodeEntity.delete');
// delete: api/NodeEntities/${encodeURIComponent(id)}
export const deleteNodeEntity = (id: string): Promise<Response<string>> => Api('delete', `/api/NodeEntities/${encodeURIComponent(id)}`, null, deleteNodeEntityActions);

