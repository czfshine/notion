import React, { Component } from 'react';
import '../style/layout.css';
class Horizontal extends Component {
  render() {
    return (
      <div className="horizontal-layout" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

export default Horizontal;
