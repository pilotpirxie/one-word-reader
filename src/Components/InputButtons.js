import React, { Component } from 'react';

class InputButtons extends Component {
    render() {
        // check if form is not filled and buttons should be visible
        if ( this.props.showButtons ) {

            // check if app is now working
            var playButtonText;
            if ( this.props.appState.isPlaying ) {
                playButtonText = 'Stop';
            } else {
                playButtonText = 'Play';
            }

            return (
              <div className="InputButtons">
                <h3>
                  <div onClick={this.props.previousWord} className="button button-previous">{'<<'}</div>
                  <div onClick={this.props.slowDown} className="button button-speed-down">-</div>
                  <div onClick={this.props.togglePlay} className="button button-play">{ playButtonText }</div>
                  <div onClick={this.props.speedUp} className="button button-speed-up">+</div>
                  <div onClick={this.props.nextWord} className="button button-next">>></div>
                </h3>
                <h5 id="wordCount">{this.props.appState.wordPosition} / {this.props.appState.wordsArray.length} ({Math.round(1000/this.props.appState.speed*60)} WPM)</h5>
              </div>
            );
        } else {
            return (
                <div />
            );
        }
    }
}

export default InputButtons;
