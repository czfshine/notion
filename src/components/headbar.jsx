import React, {Component} from 'react';

import HeadName from "./headname";
import HeadBox from "./headbox"
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

export  default HeadBar;