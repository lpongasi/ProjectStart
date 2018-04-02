import * as classnames from 'classnames';
import * as React from 'react';
import { ModeEnum } from 'shared/AppModels/ModeEnum';
import {
    getPages,
    postPageDataActionId,
} from 'shared/AppModels/PageDataController';
import { IPageDataEntity } from 'shared/AppModels/PageDataEntity';
import { AddInitialFormInputs, UpdateFormInput } from 'shared/Component/common';
import { ModalOpen } from 'shared/modal';


interface StateProps {
    pages?: { [key: string]: IPageDataEntity };
}

interface OwnProps {
    parentId?: string;
    odd?: boolean;
}
interface OwnState {
    firstLoad: boolean;
    pages: {
        [key: string]: IPageDataEntity,
    };
    isActive: {
        [key: string]: boolean,
    };
}

type OwnStateProps = OwnProps & StateProps;


export default class Pages extends React.Component<OwnStateProps, OwnState> {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: true,
            pages: {},
            isActive: {},
        };
        this.loadPages = this.loadPages.bind(this);
        this.attachDropdown = this.attachDropdown.bind(this);
    }
    public loadPages(e, parentId) {
        e.preventDefault();
        this.setState({
            isActive: {
                ...this.state.isActive,
                [parentId]: !this.state.isActive[parentId],
            },
        });

    }
    public createNewPage(e: React.MouseEvent<HTMLElement>, parent: IPageDataEntity) {
        e.preventDefault();
        AddInitialFormInputs(postPageDataActionId, {});
        ModalOpen('create-page-modal', parent);
        UpdateFormInput(postPageDataActionId, 'parentId', parent.id);
    }
    public attachDropdown() {
        Object.keys(this.state.pages).forEach(pageId => {
            const elem = document.getElementById(`dropdown-trigger-${pageId}`);
            const instance = M.Dropdown.getInstance(elem);
            if (!instance) {
                M.Dropdown.init(elem, { constrainWidth: false });
            }
        });
    }
    public componentDidMount() {
        getPages(this.props.parentId ? this.props.parentId : '', data => {
            this.setState({
                pages: {
                    ...this.state.pages,
                    ...data.data,
                },
            }, () => {
                this.attachDropdown();
            });
        });
    }
    public render() {
        const { pages } = this.state;
        return pages && Object.values(pages).filter(f => (f.parentId ? f.parentId : null) === (this.props.parentId ? this.props.parentId : null)).map(page => (
            <div key={page.id} className={classnames('page-row', {
                odd: this.props.odd,
                even: !this.props.odd,
            })}>
                <a className="drop" href="#" onClick={e => this.loadPages(e, page.id)}>
                    <i className={classnames('fas', 'fa-lg', {
                        'fa-caret-right': !this.state.isActive[page.id],
                        'fa-caret-down': this.state.isActive[page.id],
                    })} />
                </a>
                <a className="content" href="#" onClick={e => this.loadPages(e, page.id)}>
                    <i className="fas fa-newspaper fa-lg" /> {page.name}
                </a>
                <a id={`dropdown-trigger-${page.id}`} className="dropdown-trigger menu" href="#" data-target={`dropdown-${page.id}`} >
                    <i className="fas fa-bars fa-lg" />
                </a>
                <ul id={`dropdown-${page.id}`} className="dropdown-content">
                    <li>
                        <a href="#" className="waves-effect waves-blue" onClick={e => this.createNewPage(e, page)} >
                            <i className="fas fa-plus-square fa-lg" /> Add
                        </a>
                    </li>
                    <li>
                        <a href="#" className="waves-effect waves-blue" onClick={e => this.createNewPage(e, page)} >
                            <i className="fas fa-pen-square fa-lg" /> Edit
                        </a>
                    </li>
                    <li>
                        <a href="#" className="waves-effect waves-blue" onClick={e => this.createNewPage(e, page)} >
                            <i className="fas fa-trash fa-lg" />Delete
                        </a>
                    </li>
                </ul>
                {this.state.isActive[page.id] ?
                    (
                        <div className="sub">
                            <Pages parentId={page.id} odd={!this.props.odd} />
                        </div>
                    )
                    : (<span />)}
            </div>
        ));
    }
}
