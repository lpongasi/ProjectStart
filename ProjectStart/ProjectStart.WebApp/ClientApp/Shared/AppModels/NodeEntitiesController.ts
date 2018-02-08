import { AxiosPromise } from 'axios';
import { NodeEntity } from 'shared/AppModels/NodeEntity';
import { Api } from 'shared/Component/api';


// get: api/NodeEntities
export const getNodeget = (): AxiosPromise<NodeEntity[]> => Api('get', `/api/NodeEntities`, null);

