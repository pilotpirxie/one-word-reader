import React, { Component } from 'react';

class SingleWord extends Component {
  render() {
    return (
      <div className="SingleWord">
        <h3><div id="Inner-word">{this.props.text}</div></h3>
      </div>
    );
  }
}

export default SingleWord;
