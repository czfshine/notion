import React, {Component} from 'react';
import {Button} from "react-bootstrap"

import "jquery/dist/jquery.min"

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import  "./dashboard.css"

import "./component/placeholder"
import Placeholder from "./component/placeholder";


class Ico extends Component {

    render() {
        return (<span className={`glyphicon glyphicon-${String(this.props.name)}`} aria-hidden="true"> </span>);

    }
}
class HeadName extends Component {

    render() {

        return (
            <div className="navbar-header">
                <a className="navbar-brand">洛书</a>
            </div>
        );
    }
}
class HeadBox extends Component {
    render() {
        return (<div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">分享</a></li>
                <li><a href="#">风格</a></li>
                <li><a href="#">Slack</a></li>
                <li><a href="#">更多</a></li>
                <li>
                    <a href="#">
                        <Ico name="plus"/>
                    </a>
                </li>
            </ul>
        </div>);
    }
}
class HeadBar extends Component {
    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <HeadName/>
                    <HeadBox/>

                </div>
            </div>
        );
    }
}


class Container extends Component {

    render() {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <Placeholder/>
            </div>
        )
    }
}

class UserInfo extends Component {
    render() {
        return (
            <ul className="nav nav-sidebar">
                <li>
                    <a href="#">
                        <Ico name="user"/>用户名
                        <Ico name="chevron-down"/>
                    </a>
                </li>
            </ul>
        )
    }
}

class Notebooks extends Component {

    constructor(props) {
        super(props);
        this.state.books = [];
    }

    render() {
        return (
            <ul className="nav nav-sidebar">

                <li><a href="#">团队页面</a></li>
                <li>
                    <a href="#">
                        <Ico name="right"/>
                        <Ico name="book"/>
                        页面1
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Ico name="chevron-right"/>
                        <Ico name="book"/>
                        页面2
                    </a>
                </li>
            </ul>

        )
    }
}
class SideBar extends Component {

    render() {
        return (

            <div className="col-sm-2 col-md-2 sidebar">
                <UserInfo/>
                <Notebooks/>
                <ul className="nav nav-sidebar">
                    <li><a href="#">下载桌面应用</a></li>
                    <li><a href="#">帮助与回馈</a></li>
                </ul>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeadBar/>
                <div className="container">
                    <div className="row">
                        <SideBar/><Container/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
