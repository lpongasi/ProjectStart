import * as React from 'react';
import * as Uuid from 'uuid/v4';

type Prop = {
    id?: string;
    options?: object;
    getId?: (id: string) => void;
};

export default class SideNav extends React.Component<Prop, Prop> {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id ? props.id : Uuid(),
            options: props.options ? props.options : {},
        };
    }
    public componentDidMount() {
        const elem = document.getElementById(this.state.id);
        M.Sidenav.init(elem, { ...this.props.options });
        if (this.props.getId) {
            this.props.getId(this.state.id);
        }
    }

    public render() {
        return (
            <div id={this.state.id} className="sidenav">
                {this.props.children}
            </div>
        );
    }
}
