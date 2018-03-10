import * as React from 'react';
import SideNav from 'shared/sidenav';
import CreatePage from './create';

export default class Page extends React.Component {

    public render() {
        return (
            <div>
                <a data-target="slide-out" className="sidenav-trigger btn btn-small">Pages</a>
                <SideNav id="slide-out">
                    <ul>
                        <li><a href="#" data-target="create-page-modal" className="modal-trigger waves-effect waves-blue">New Page</a></li>
                    </ul>
                </SideNav>
                <CreatePage />
            </div>
        );
    }
}

