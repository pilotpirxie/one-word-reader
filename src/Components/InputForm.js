import React, { Component } from 'react';

class InputForm extends Component {
  render() {
    return (
      <div className="InputForm">
          <div id="gui-preload">
            <textarea placeholder="Put your contents here..." id="text" rows={14} defaultValue={""} />
            <h3 className="button button-ready">Ready</h3>
            <h5>source code <a style={{color: '#444'}} href="https://github.com/pilotpirxie/one-word-reader/">GitHub</a></h5>
          </div>
      </div>
    );
  }
}

export default InputForm;
