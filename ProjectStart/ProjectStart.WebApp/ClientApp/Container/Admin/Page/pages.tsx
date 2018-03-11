import * as React from 'react';
import { getPages } from 'shared/AppModels/PageDataController';
import { IPageDataEntity } from 'shared/AppModels/PageDataEntity';

type Props = {
    parentId?: string;
    pages: IPageDataEntity[],
    createNewPage?: (parent: IPageDataEntity) => void;
}

export default class Pages extends React.Component<Props, any> {
    constructor(props) {
        super(props);
        this.state = {
            pages: [],
        }
    }
    public loadPages(e, parentId) {
        e.preventDefault();
        if (this.state[parentId] && this.state[parentId].lenth > 0) {
            this.setState({ [`${parentId}-isActive`]: !this.state[`${parentId}-isActive`] });
        } else {
            getPages(parentId).then(t => {
                this.setState({ [parentId]: t.data, [`${parentId}-isActive`]: !this.state[`${parentId}-isActive`] });
            });
        }
    }
    public createNewPage(e, parent: IPageDataEntity) {
        e.preventDefault();
        if (this.props.createNewPage) {
            this.props.createNewPage(parent);
        }
    }
    public render() {
        const { pages } = this.props;
        return (
            <div className="page-list">
                {pages.map(page => (
                    <div key={page.id} className="row">
                        <a className="col s2" href="#" onClick={e => this.loadPages(e, page.id)}>[[[]]]</a>
                        <a className="col s8" href="#">{page.name}</a>
                        <a className="col s2 center" href="#">[[[]]]</a>
                        <Pages pages={this.state[`${page.id}-isActive`] ? this.state[page.id] : []} parentId="" createNewPage={this.props.createNewPage} />
                        {this.state[`${page.id}-isActive`]
                            ? (<div className="row page-list">
                                <a href="#" className="waves-effect waves-blue col s12" onClick={e => this.createNewPage(e, page)} >Add sub pages for {page.name}</a>
                            </div>)
                            : (<span />)
                        }
                    </div>
                ))}
            </div>
        );
    }
}


