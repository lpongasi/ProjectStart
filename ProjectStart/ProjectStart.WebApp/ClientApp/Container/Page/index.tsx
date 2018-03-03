import * as React from 'react';
import { Link } from 'react-router-dom';
import { RootState } from 'shared/Component/common';
import { Api } from 'shared/Component/api';
import { PAGE } from 'shared/Component/action';
import ErrorPage from 'shared/errorPage';
import { connect } from 'react-redux';



class Page extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.props.history.listen((location) => {
            if (location.pathname !== this.props.location.pathname) {
                Api("get", `${location.pathname}?isJson=true`, {}, PAGE);
            }
        });
    }
    public render() {
        const { page } = this.props;
        return page && page.name
            ? (
                <div>
                    <h1>Welcome Your in {page.name}</h1>
                    <Link to="/Page/page1">THE PAGE</Link>
                    <Link to="/Page/theparent">THE PARENT</Link>
                    <Link to="/Page/theparentasdas">THE PARENT2</Link>
                </div >
            )
            : (<ErrorPage />);
    }
}

export default connect((state: RootState) => ({ page: state.page }))(Page);