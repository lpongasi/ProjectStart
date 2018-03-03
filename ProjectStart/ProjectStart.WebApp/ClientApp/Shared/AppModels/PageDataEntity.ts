import { INodeEntity, NodeEntity} from 'shared/AppModels/NodeEntity';
/**
 * Interface for: ProjectStart.Entity.Cms.PageDataEntity
 */
export interface IPageDataEntity extends INodeEntity<PageDataEntity> {
    title: string;
    parentUrl: string;
    nameUrl: string;
    description: string;
    keywords: string;
}
/**
 * Base view model for ProjectStart.Entity.Cms.PageDataEntity
 */
export class PageDataEntity extends NodeEntity<PageDataEntity> implements IPageDataEntity {
    title: string;
    parentUrl: string;
    nameUrl: string;
    description: string;
    keywords: string;
}
