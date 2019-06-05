import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
import DevToos from 'mobx-react-devtools';
import logo from './logo.svg';

@observer
class App extends Component {
handleIncrement = () => { this.props.testStore.increment() };
render() {
  console.log(this.props.age);
    return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <header className="App-header">
            <DevToos />
            <h1>{this.props.testStore.age}</h1>
              <h2>{this.props.testStore.name}</h2>
            <h4>{this.props.testStore.doubleAge}</h4>
            <button onClick={ this.props.testStore.increment }>+1</button>
            <button onClick={this.props.testStore.getName}>name</button>
          </header>
        </div>
    );
  }
}

export default App;
