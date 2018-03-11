import * as React from 'react';
import SideNav from 'shared/sidenav';
import CreatePage from './create';
import { IPageDataEntity  } from 'shared/AppModels/PageDataEntity';
import { getPages } from 'shared/AppModels/PageDataController';
import Pages from './pages';

type State = {
    pages: IPageDataEntity[];
}

export default class Page extends React.Component<any,State> {
    constructor(props) {
        super(props);
        this.state = {
            pages: [],
        }
        this.createPage = this.createPage.bind(this);
    }
    public componentDidMount() {
        getPages('').then(t => {
            this.setState({ pages: t.data });
        });
    }
    public createPage(page: IPageDataEntity) {
        console.log('page', page);
    }

    public render() {

        return (
            <div>
                <a data-target="slide-out" className="sidenav-trigger btn btn-small">Pages</a>
                <SideNav id="slide-out">
                    <Pages pages={this.state.pages} createNewPage={this.createPage} />
                </SideNav>
                <CreatePage />
            </div>
        );
    }
}

