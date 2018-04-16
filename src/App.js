import React, { Component } from 'react';
import InputForm from './Components/InputForm';
import SingleWord from './Components/SingleWord';
import InputButtons from './Components/InputButtons';
import './App.css';

class App extends Component {
    componentWillMount() {
        this.setState({
            sourceText: '',
            wordsArray: [],
            wordPosition: 0,
            isPlaying: false,
            speed: 200
        });
    }

    /**
     * Set source text
     * @param {string} text New text
     */
    setSourceText(text) {
        this.setState({
            sourceText: text,
            wordsArray: text.trim().split(' ')
        }, () => {
            console.log(this.state);
        })
    }

    /**
     * Set word to the next one
     */
    nextWord() {
        this.setState({
            wordPosition: this.state.wordPosition + 1
        }, () => {
            this.forceOff();
        });
    }

    /**
     * Set word to the previous one
     */
    previousWord() {
        this.setState({
            wordPosition: this.state.wordPosition - 1
        }, () => {
            this.forceOff();
        });
    }

    /**
     * Increase interval between words
     */
    slowDown() {
        if ( this.state.speed < 990 ){
            this.setState({
                speed: this.state.speed + 5
            }, () => {
                this.forceOff();
            });
        }
    }

    /**
     * Decrease interval between words
     */
    speedUp() {
        if ( this.state.speed > 10 ){
            this.setState({
                speed: this.state.speed - 5
            }, () => {
                this.forceOff();
            });
        }
    }

    /**
     * Turn off
     */
    forceOff() {
        this.setState({
            isPlaying: false
        }, () => {
            clearInterval(this.intervalId);
        });
    }

    /**
     * Toggle isPlaying state
     */
    togglePlay() {
        if ( this.state.isPlaying ) {
            this.setState({
                isPlaying: false
            }, () => {
                clearInterval(this.intervalId);
            });
        } else {
            this.setState({
                isPlaying: true
            }, () => {
                this.intervalId = setInterval(() => {
                    if ( this.state.isPlaying && this.state.wordPosition < this.state.wordsArray.length ) {
                        this.setState({
                            wordPosition: this.state.wordPosition + 1
                        });
                    }
                }, this.state.speed);
            });
        }
    }

    render() {
        return (
          <div className="App">
            <div className="App-header">
                <div>
                    <SingleWord
                        text={this.state.wordsArray[this.state.wordPosition]}
                    />
                    <InputForm
                        setSourceText={this.setSourceText.bind(this)}
                        showForm={this.state.sourceText === ''}
                    />
                    <InputButtons
                        appState={this.state}
                        slowDown={this.slowDown.bind(this)}
                        speedUp={this.speedUp.bind(this)}
                        previousWord={this.previousWord.bind(this)}
                        nextWord={this.nextWord.bind(this)}
                        togglePlay={this.togglePlay.bind(this)}
                        showButtons={!(this.state.sourceText === '')}
                    />
                </div>
            </div>
          </div>
        );
    }
}

export default App;
