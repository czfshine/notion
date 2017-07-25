import React,{Component} from "react";

import Placeholder from "./placeholder"
class Container extends Component {

    render() {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <Placeholder/>
            </div>
        )
    }
}

export default  Container;