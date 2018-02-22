import * as React from 'react';
import { connect } from 'react-redux';
import { getList, getListActions, postNodeEntity, postNodeEntityActions } from 'shared/AppModels/NodeEntitiesController';
import { NodeEntity } from 'shared/AppModels/NodeEntity';
import { getFormData } from 'shared/Component/common';


@connect(state => ({
    list: getFormData(state.form[getListActions.id], []),
}))
export default class LoginForm extends React.PureComponent<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
        };
    }
    public addNode() {
        let node = new NodeEntity();
        node.code = "1002";
        node.name = "lOKI";
        postNodeEntity(node).then(response => {
            this.setState({ list: [...this.state.list, response.data] });
        });
    }

    public render() {
        const { list } = this.state;

        return (
            <div>
                <h1>The Nodes</h1>
                {(list as NodeEntity[]).map(node => (<h4 key={node.id}>{node.id} - {node.name}</h4>))}
                <button onClick={() => getList().then(t => this.setState({ list: t.data }))}>List</button>
                <button onClick={() => this.addNode()}>Addd</button>
            </div>
        );
    }
}