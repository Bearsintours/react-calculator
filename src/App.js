import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Calculator</h1>
        </header>
        <Calculator/>
      </div>
    );
  }
}

class Calculator extends React.Component {
  state = {
    screen: "",
    calc: [],
  }
  handleClick = (e) => {
    const val = e.target.value;
    let screen = this.state.screen;
    if(val !== 'C' && val !== '=') {
      screen += val;
      this.setState({screen});
    }
  }

  reset = () => {
    this.setState({
      screen: '',
      calc: []
    })
  }

  calculate = () => {
    const val = this.state.screen;
  }

  render() {
    const screenValue = this.state.screen === '' ? 0 : this.state.screen;
    return (
      <div className="calculator">
        <div className="screen">
          {screenValue}
        </div>
        <div className="buttons" onClick={((e) => this.handleClick(e))}>
          <button value="C" className="btn clear grey" onClick={this.reset}>C</button>
          <button value="%" className="btn grey">%</button>
          <button value="/" className="btn orange">&divide;</button>
          <button value="7" className="btn">7</button>
          <button value="8" className="btn">8</button>
          <button value="9" className="btn">9</button>
          <button value="*" className="btn orange">&times;</button>
          <button value="4" className="btn">4</button>
          <button value="5" className="btn">5</button>
          <button value="6" className="btn">6</button>
          <button value="-" className="btn orange">&minus;</button>
          <button value="1" className="btn">1</button>
          <button value="2" className="btn">2</button>
          <button value="3" className="btn">3</button>
          <button value="+" className="btn orange">+</button>
          <button value="0" className="btn zero">0</button>
          <button value="." className="btn">&middot;</button>
          <button value="=" className="btn orange" onClick={this.calculate}>=</button>
        </div>
      </div>
    )
  }
}

export default App;
