import React,{Component} from "react";

import Placeholder from "./placeholder"
import Editor from "./editor"
import {Content} from "react-mdl";
class Container extends Component {

    render() {
        return (
            <Content>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <Editor/>
            </div>
            </Content>
        )
    }
}

export default  Container;