import React, { Component } from 'react';
import InputForm from './Components/InputForm';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            sourceText: ''
        };
    }

    render() {
        return (
          <div className="App">
            <div className="App-header">
                <div>
                    <h3><div id="word-inner" /></h3>
                    <InputForm />
                </div>
            </div>
          </div>
        );
    }
}

export default App;
