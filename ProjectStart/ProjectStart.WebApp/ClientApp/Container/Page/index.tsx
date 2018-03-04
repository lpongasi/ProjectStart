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
            Api("get", `${location.pathname}?isJson=true`, {}, PAGE);
        });
    }
    public render() {
        const { page } = this.props;
        return page && page.name
            ? (
                <div>
                    <h1>Welcome Your in {page.name}</h1>
                    <Link className="btn btn-primary" to="/Page/page1" replace={true}>THE PAGE</Link>
                    <Link className="btn btn-primary" to="/Page/theparent" replace={true}>THE PARENT</Link>
                    <Link className="btn btn-primary" to="/Page/theparentasdas">THE PARENT2</Link>
                </div >
            )
            : (<ErrorPage />);
    }
}

export default connect((state: RootState) => ({ page: state.page, state }))(Page);
