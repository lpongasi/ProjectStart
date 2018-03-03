import { BaseEntity, IBaseEntity} from 'shared/AppModels/BaseEntity';
/**
 * Interface for: ProjectStart.Entity.Common.NodeEntity<T>
 */
export interface INodeEntity<T> extends IBaseEntity {
    parentId: string;
    parentNode: T;
    subNodes: T[];
}
/**
 * Base view model for ProjectStart.Entity.Common.NodeEntity<T>
 */
export class NodeEntity<T> extends BaseEntity implements INodeEntity<T> {
    parentId: string;
    parentNode: T;
    subNodes: T[];
}
