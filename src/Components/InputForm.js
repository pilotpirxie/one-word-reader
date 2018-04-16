import React, { Component } from 'react';

class InputForm extends Component {
    handleRead(){
        // check if textarea has any text inside
        if ( this.refs.sourceText.value === '' ) {
            alert('Fill textarea and click Read button again...');
        } else {
            this.props.setSourceText(this.refs.sourceText.value);
        }
    }

    render() {
        // check if form should be visible
        if ( this.props.showForm ) {
            return (
              <div className="InputForm">
                  <div id="gui-preload">
                    <textarea placeholder="Put your contents here..." ref="sourceText" rows={14} />
                    <h3 className="button button-ready" onClick={this.handleRead.bind(this)}>Ready</h3>
                    <h5>source code <a style={{color: '#444'}} href="https://github.com/pilotpirxie/one-word-reader/">GitHub</a></h5>
                  </div>
              </div>
            );
        } else {
            return (<div/>);
        }
    }
}

export default InputForm;
