import * as React from 'react';
import { AddInitialData } from 'shared/Component/common';
import * as Uuid from 'uuid/v4';

type Prop = {
    id?: string;
    options?: object;
    getId?: (id: string) => void;
    header?: string;
    footer?: any;
    footerCloseText?: string;
};

export const ModalOpen = (id: string, data: object = {}) => {
    AddInitialData(id, { ...data });
    const instance = M.Modal.getInstance(document.getElementById(id));
    instance.open();
};

export const ModalClose = (id: string, data: object = {}) => {
    AddInitialData(id, { ...data });
    const instance = M.Modal.getInstance(document.getElementById(id));
    instance.close();

};

export default class Modal extends React.Component<Prop, Prop> {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id ? props.id : Uuid(),
            options: props.options ? props.options : {},
        };
        this.modalClose = this.modalClose.bind(this);
    }
    public componentDidMount() {
        const elem = document.getElementById(this.state.id);
        M.Modal.init(elem, { ...this.props.options });
        if (this.props.getId) {
            this.props.getId(this.state.id);
        }
    }
    public modalClose(e) {
        e.preventDefault();
        ModalClose(this.state.id, {});
    }

    public render() {
        const { children, header, footer, footerCloseText } = this.props;
        return (
            <div id={this.state.id} className="modal modal-fixed-footer">
                {header && (<h5 className="modal-header">{header}</h5>)}
                <div className="modal-content">
                    {children}
                </div>
                {(footer || footerCloseText) && (<div className="modal-footer">
                    {footer}
                    {footerCloseText && (<a className="waves-effect waves-green btn-flat" onClick={this.modalClose} >{footerCloseText}</a>)}
                </div>)}
            </div>
        );
    }
}
