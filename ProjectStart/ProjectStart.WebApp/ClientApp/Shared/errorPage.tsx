﻿import * as React from 'react';
import * as AccountController from 'shared/AppModels/AccountController';
import { LoginViewModel } from 'shared/AppModels/LoginViewModel';
import Login from 'shared/Form/Login';

export default class ErrorPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var elem = document.querySelector('.sidenav');
        (M as any).Sidenav.init(elem);
        const login = new LoginViewModel();
        login.email = "loucris.pongasi@gmail.com";
        login.password = "P@ssw0rd12312312";
        login.rememberMe = false;
        //AccountController.loginpost(login, "LOLS")
        //    .then(r => {
        //        alert(r.data.message);
        //    });
    }

    render() {
        return (
            <div>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                        <div className="background">
                            <img src="images/office.jpg" />
                        </div>
                        <a href="#!user"><img className="circle" src="images/yuna.jpg" /></a>
                        <a href="#!name"><span className="white-text name">John Doe</span></a>
                        <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <a className="waves-effect waves-light btn">button</a>
                <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>button</a>
                <a className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>button</a>
                <h1><span className="fas fa-times"> </span> Page Not Found! LOL</h1>
                <button onClick={() => this.setState({
                    firstName: '{1} not Valid {0}',
                    lastName: 'LOL LAST NAME',
                })}>
                    Refresh Error
                </button>
                <Login />
            </div>
        );
    }
}
