import { BaseEntity, IBaseEntity} from 'shared/AppModels/BaseEntity';
/**
 * Interface for: ProjectStart.Entity.NodeEntity
 */
export interface INodeEntity extends IBaseEntity {
    parentId: string;
    parentNode: NodeEntity;
    subNodes: NodeEntity[];
}
/**
 * Base view model for ProjectStart.Entity.NodeEntity
 */
export class NodeEntity extends BaseEntity implements INodeEntity {
    parentId: string;
    parentNode: NodeEntity;
    subNodes: NodeEntity[];
}
