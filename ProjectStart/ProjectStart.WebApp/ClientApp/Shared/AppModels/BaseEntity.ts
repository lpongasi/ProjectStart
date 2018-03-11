import { HistoryEntity } from 'shared/AppModels/HistoryEntity';
/**
 * Interface for: ProjectStart.Entity.Common.BaseEntity
 */
export interface IBaseEntity  {
    id: string;
    name: string;
    history: HistoryEntity;
}
/**
 * Base view model for ProjectStart.Entity.Common.BaseEntity
 */
export class BaseEntity  implements IBaseEntity {
    id: string;
    name: string;
    history: HistoryEntity;
}
