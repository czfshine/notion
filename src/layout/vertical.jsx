import React, { Component } from 'react';

class Vertical extends Component {
  render() {
    return (
      <div className="vertical-layout" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

export default Vertical;
