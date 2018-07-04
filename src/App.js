import React, { Component } from 'react';
import AnchorLayout from './anchorLayout';
/* import logo from './logo.svg'; */
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.mainPanel = React.createRef();
    this.buttonPanel = React.createRef();
  }

  render() {
    const doms = [];
    for(let i=0; i < 9; i++){
      doms.push(<button key={i} onClick={this.handleClick.bind(this, i)}>{i}</button>);
    }
    return (
      <div className="App">
        <AnchorLayout ref={this.mainPanel} />
        <AnchorLayout init={doms} />
      </div>
    );
  }
  
  handleClick = (i) => {
    this.mainPanel.current.insertTestBox(i);
  }

}

export default App;
