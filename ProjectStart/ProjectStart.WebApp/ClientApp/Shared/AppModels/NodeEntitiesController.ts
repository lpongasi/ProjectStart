import { GenericResponse } from 'shared/AppModels/GenericResponse';
import { NodeEntity } from 'shared/AppModels/NodeEntity';
import { Api } from 'shared/Component/api';
import { ActionTypes, CreateStateAction } from 'shared/Component/common';


// State for get: api/NodeEntities
export const getNodeActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.NodeEntitiesController.GetNode.get');
// get: api/NodeEntities
export const getNode = (): Promise<GenericResponse<NodeEntity[]>> => Api('get', `/api/NodeEntities`, null, getNodeActions);

