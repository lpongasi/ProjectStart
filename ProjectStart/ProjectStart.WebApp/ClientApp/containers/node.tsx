import * as React from 'react';
import { connect } from 'react-redux';
import { dispatcher, api, MethodType } from '../component/api';
import { GenerateId } from '../component/common';
export const node = (state) => (
  {
    ...state.node
  }
);

const DisplayNode = ({ nodes =[],selectedId = 0 }) => (
  nodes != null && nodes.length > 0
    ? <ul>
      {nodes.map((item) => (<li key={item.id}>
        <input
          type="radio"
          name="node"
          id={item.id} value={item.id}
          checked={selectedId === item.id}
          onClick={() => {
            dispatcher('NODE_SELECT', { selectedNode: { ...item } });
          }}
        />
        <label htmlFor={item.id}>{item.name}</label>
        <DisplayNode nodes={item.subNodes} selectedId={selectedId}/>
      </li>)

      )}
    </ul>
    : null
);


@connect(node)
export default class Node extends React.Component<any, any> {
  componentDidMount() {
    api('NODE_GETALL', MethodType.Get, 'api/nodes');
  }
  render() {
    const { selectedNode, nodes } = this.props;
    return (
      <div className="row">
        SELECTED <br />
        {selectedNode != null
          ? <span>
            {selectedNode.name}
            <br />
            {selectedNode.subNodes.map(item => <span key={GenerateId()}>{item.name}</span>)}
            </span>
          : null
        }
        <br />
        LIST NODES <br />
        <DisplayNode nodes={nodes} selectedId={selectedNode!=null?selectedNode.id:0} />
      </div>
    );
  }
}
