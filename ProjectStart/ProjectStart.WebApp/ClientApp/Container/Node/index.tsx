import * as React from 'react';
import { connect } from 'react-redux';
import {
    deleteNodeEntity,
    getList,
    getListActions,
    postNodeEntity,
    postNodeEntityActions,
} from 'shared/AppModels/NodeEntitiesController';
import { NodeEntity } from 'shared/AppModels/NodeEntity';
import { getFormData } from 'shared/Component/common';
import Input from 'shared/Form/Input';

type State = {
    list: NodeEntity[],
};
type Props = State & {
    nodeForm: NodeEntity,
};

@connect(state => ({
    nodeForm: state.form[postNodeEntityActions.id],
    list: getFormData<NodeEntity[]>(state.form[getListActions.id], []),
}))
export default class LoginForm extends React.PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
        };
    }
    public deleteNode(nodeId: string) {
        deleteNodeEntity(nodeId).then(response => {
            if (response.success) {
                this.setState({ list: [...this.state.list.filter(f => f.id !== nodeId)] });
            }
        });
    }
    public addNode(e) {
        e.preventDefault();
        postNodeEntity(this.props.nodeForm).then(response => {
            if (response.success) {
                this.setState({ list: [...this.state.list, response.data] });
            }
        });
    }
    public componentWillMount() {
        getList().then(t => this.setState({ list: t.data }));
    }
    public render() {
        const { list } = this.state;

        return (
            <div>
                <h1>Parent Nodes</h1>
                <table className="table striped">
                    <thead>
                        <tr>
                            <th>CODE</th>
                            <th>NAME</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(node => (
                            <tr key={node.id}>
                                <td>{node.code} </td>
                                <td>{node.name}</td>
                                <td><button onClick={() => this.deleteNode(node.id)} className="btn">DELETE</button></td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                <Input
                                    formName={postNodeEntityActions.id}
                                    label="Code"
                                    name="code"
                                    type="text"
                                    clientValidate={false}
                                    required
                                />
                            </td>
                            <td>
                                <Input
                                    formName={postNodeEntityActions.id}
                                    label="Name"
                                    name="name"
                                    type="text"
                                    clientValidate={false}
                                />
                            </td>
                            <td>
                                <form onSubmit={e => this.addNode(e)}>
                                    <button type="submit" className="btn">Add</button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        );
    }
}
