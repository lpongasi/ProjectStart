/**
 * Interface for: ProjectStart.Entity.Common.BaseEntity
 */
export interface IBaseEntity  {
    id: string;
    name: string;
    createdBy: string;
    dateCreated: Date;
    modifiedBy: string;
    dateModified?: Date;
    isRemoved: boolean;
    removedBy: string;
    dateRemoved?: Date;
}
/**
 * Base view model for ProjectStart.Entity.Common.BaseEntity
 */
export class BaseEntity  implements IBaseEntity {
    id: string;
    name: string;
    createdBy: string;
    dateCreated: Date;
    modifiedBy: string;
    dateModified?: Date;
    isRemoved: boolean;
    removedBy: string;
    dateRemoved?: Date;
}
