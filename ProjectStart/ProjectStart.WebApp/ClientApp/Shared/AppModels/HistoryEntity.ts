/**
 * Interface for: ProjectStart.Entity.Common.HistoryEntity
 */
export interface IHistoryEntity  {
    id: string;
    createdBy: string;
    dateCreated: Date;
    modifiedBy: string;
    dateModified?: Date;
    isRemoved: boolean;
    removedBy: string;
    dateRemoved?: Date;
}
/**
 * Base view model for ProjectStart.Entity.Common.HistoryEntity
 */
export class HistoryEntity  implements IHistoryEntity {
    id: string;
    createdBy: string;
    dateCreated: Date;
    modifiedBy: string;
    dateModified?: Date;
    isRemoved: boolean;
    removedBy: string;
    dateRemoved?: Date;
}
