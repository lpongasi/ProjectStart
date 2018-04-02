/**
 * Interface for: ProjectStart.Entity.Cms.FormsEntity
 */
export interface IFormsEntity  {
    id: string;
    name: string;
    defaultValue: string;
    patterns: string;
    type: string;
    classNames: string;
}
/**
 * Base view model for ProjectStart.Entity.Cms.FormsEntity
 */
export class FormsEntity  implements IFormsEntity {
    id: string;
    name: string;
    defaultValue: string;
    patterns: string;
    type: string;
    classNames: string;
}
