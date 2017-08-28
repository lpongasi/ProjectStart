import * as React from 'react';
import { connect } from 'react-redux';

export const loading = (state) => (
  {
    ...state.loading
  }
);
@connect(loading)
export default class Loading extends React.Component<any,any>
{
  render() {
    return (
      <div>
        {this.props.status}
      </div>
    );
  }
}