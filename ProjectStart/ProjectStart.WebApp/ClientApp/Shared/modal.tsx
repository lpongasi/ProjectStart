import * as React from 'react';
import * as Uuid from 'uuid/v4';

type Prop = {
    id?: string;
    options?: object;
    getId?: (id: string) => void;
    header?: string;
    footer?: any;
    footerCloseText?: string;
}

export default class Modal extends React.Component<Prop, Prop> {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id ? props.id : Uuid(),
            options: props.options ? props.options : {},
        }
    }
    public componentDidMount() {
        var elem = document.getElementById(this.state.id);
        M.Modal.init(elem, { ...this.props.options });
        if (this.props.getId) {
            this.props.getId(this.state.id);
        }
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
                    {footerCloseText && (<a className="modal-action modal-close waves-effect waves-green btn-flat">{footerCloseText}</a>)}
                </div>)}
            </div>
        );
    }
} 
