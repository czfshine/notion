import React, {Component} from 'react';
import "jquery/dist/jquery.min"
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import  "../dashboard.css"


import HeadBar from "./headbar"
import SideBar from "./sidebar"
import Container from "./container"
class App extends Component {
    render() {
        return (
            <div className="App">
                <HeadBar/>
                <div className="container">
                    <div className="row">
                        <SideBar/>
                        <Container/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
