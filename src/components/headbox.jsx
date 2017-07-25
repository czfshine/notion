import React, {Component} from 'react';

import Ico from  "./ico"
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

export  default HeadBox;