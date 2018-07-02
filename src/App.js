import React, { Component } from 'react';
import Anchor from './anchorLayout';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const doms = [];
    for(let i=0; i<9 ; i++){
      doms.push(<button key={i} onClick={this.handleClick.bind(this, i)}>add</button>);
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Anchor setAnchor={this.setAnchor}/>
        {doms}
      </div>
    );
  }
  
  setAnchor = (ref) => {
    this.anchor = ref;
  }

  handleClick = (i) => {
    this.anchor.insertTestBox(i);
  }

}

export default App;
