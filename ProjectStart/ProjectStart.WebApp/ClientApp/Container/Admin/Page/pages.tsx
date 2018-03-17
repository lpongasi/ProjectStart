import * as React from 'react';
import { getPages, getPagesActionId } from 'shared/AppModels/PageDataController';
import { IPageDataEntity } from 'shared/AppModels/PageDataEntity';
import { Connector, FormData } from 'shared/Component/common';



interface StateProps {
    pages?: { [key: string]: IPageDataEntity },
}

interface OwnProps {
    parentId?: string;
}
interface OwnState {
    firstLoad: boolean,
    pages: {
        [key: string]: IPageDataEntity
    }
    isActive: {
        [key: string]: boolean
    }
};
type OwnStateProps = OwnProps & StateProps;

@Connector<OwnProps, StateProps>(
    state => ({
        pages: FormData(state.form[getPagesActionId], {})
    })
)
export default class Pages extends React.Component<OwnStateProps, OwnState> {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: true,
            pages: {},
            isActive: {}
        }
        this.loadPages = this.loadPages.bind(this);
    }
    public loadPages(e, parentId) {
        e.preventDefault();
        this.setState({
            isActive: {
                ...this.state.isActive,
                [parentId]: !this.state.isActive[parentId]
            }
        });

    }
    private createNewPage(e, parent: IPageDataEntity) {
        e.preventDefault();
        console.log('CREATE THIS', parent);
    }

    componentDidMount() {
        getPages(this.props.parentId ? this.props.parentId : '').then(data => {
            console.log('THE DATA', data);
            this.setState({
                pages: {
                    ...this.state.pages,
                    ...data.data
                }
            });
        });
    }
    public render() {
        const { pages } = this.state;
        return (
            <div className="page-list">
                {pages && Object.values(pages).filter(f => f.parentId == this.props.parentId).map(page => (
                    <div key={page.id} className="row">
                        <a className="col s2" href="#" onClick={e => this.loadPages(e, page.id)}>[[[]]]</a>
                        <a className="col s8" href="#">{page.name}</a>
                        <a className="col s2 center" href="#">[[[]]]</a>
                        {this.state.isActive[page.id] ?
                            (<Pages parentId={page.id} />)
                            : (<span />)}
                        {this.state.isActive[page.id]
                            ? (<div className="row page-list">
                                <a href="#" className="waves-effect waves-blue col s12" onClick={e => this.createNewPage(e, page)} >Add sub pages for {page.name}</a>
                            </div>)
                            : (<span />)
                        }
                    </div>
                )
                )}
            </div>
        );
    }
}

