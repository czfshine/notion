import React, {Component} from 'react';

class Ico extends Component {

    render() {
        return (<span className={`glyphicon glyphicon-${String(this.props.name)}`} aria-hidden="true"> </span>);

    }
}

export  default  Ico;