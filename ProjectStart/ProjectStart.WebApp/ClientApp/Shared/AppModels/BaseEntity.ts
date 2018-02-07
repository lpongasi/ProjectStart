/**
 * Interface for: ProjectStart.Entity.BaseEntity
 */
export interface IBaseEntity  {
    id: string;
    code: string;
    name: string;
    createdBy: string;
    dateCreated: Date;
    modifiedBy: string;
    dateModified: Date;
    isRemoved: boolean;
    removedBy: string;
    dateRemoved: Date;
}
/**
 * Base view model for ProjectStart.Entity.BaseEntity
 */
export class BaseEntity  implements IBaseEntity {
    id: string;
    code: string;
    name: string;
    createdBy: string;
    dateCreated: Date;
    modifiedBy: string;
    dateModified: Date;
    isRemoved: boolean;
    removedBy: string;
    dateRemoved: Date;
}
