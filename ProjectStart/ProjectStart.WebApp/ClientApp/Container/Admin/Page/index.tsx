﻿import * as React from 'react';
import SideNav from 'shared/sidenav';
import CreatePage from './create';
import { addInitialData, updateFormInput } from 'shared/Component/action';
import { getPages, postPageDataActionId } from 'shared/AppModels/PageDataController';
import { IPageDataEntity } from 'shared/AppModels/PageDataEntity';
import Pages from './pages';

type State = {
    pages: IPageDataEntity[];
}

export default class Page extends React.Component<any, State> {
    constructor(props) {
        super(props);
        this.state = {
            pages: [],
        };
        this.createNewPage = this.createNewPage.bind(this);
    }
    public componentDidMount() {
        getPages('').then(t => {
            this.setState({ pages: t.data });
        });
    }
    public createNewPage(e, page: IPageDataEntity) {
        e.preventDefault();
        addInitialData(postPageDataActionId, { parentData: page });
        updateFormInput(postPageDataActionId, 'parentId', page ? page.id : null);
        const elem = document.getElementById('create-page-modal');
        const instance = M.Modal.getInstance(elem);
        instance.open();
    }
    public render() {

        return (
            <div>
                <a data-target="slide-out" className="sidenav-trigger btn btn-small">Pages</a>
                <SideNav id="slide-out">
                    <Pages pages={this.state.pages} createNewPage={this.createNewPage} />
                    <div className="row page-list">
                        <a href="#" className="waves-effect waves-blue col s12" onClick={e => this.createNewPage(e, null)} >Add new Page</a>
                    </div>
                </SideNav>
                <CreatePage />
            </div>
        );
    }
}

