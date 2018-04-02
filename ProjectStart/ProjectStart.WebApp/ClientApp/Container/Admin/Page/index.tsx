import * as React from 'react';
import { postPageDataActionId } from 'shared/AppModels/PageDataController';
import { IPageDataEntity } from 'shared/AppModels/PageDataEntity';
import { UpdateFormInput } from 'shared/Component/common';
import { ModalOpen } from 'shared/modal';
import SideNav from 'shared/sidenav';
import CreatePage from './create';
import Pages from './pages';


export default class Page extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.createNewPage = this.createNewPage.bind(this);
    }

    public createNewPage(e, page: IPageDataEntity) {
        e.preventDefault();
        UpdateFormInput(postPageDataActionId, 'parentId', page ? page.id : null);
        ModalOpen('create-page-modal', {});
    }
    public render() {
        return (
            <div>
                <a data-target="slide-out" className="sidenav-trigger btn btn-small red">Pages</a>
                <SideNav id="slide-out">
                    <Pages parentId={null} />
                    <div className="row page-list">
                        <a href="#" className="waves-effect waves-blue col s12" onClick={e => this.createNewPage(e, null)} >Add new Page</a>
                    </div>
                </SideNav>
                <CreatePage />
            </div>
        );
    }
}

