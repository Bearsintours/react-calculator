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
    newCalc: false,
  }

  handleClick = (e) => {
    const val = e.target.value;
    console.log(val)
    let screen = this.state.screen;
    console.log(screen)
    const lastVal = screen[screen.length - 1];

    if (screen.length < 20) { 
      
      if (e.target.className.includes('num')) {
        screen += val;
        this.setState({ 
          screen: screen,
          newCalc: false
         });
      }   
      else if (e.target.className.includes('calc')) {
        if (lastVal >= 0 && lastVal <= 9) {
          screen += val;
          this.setState({ screen: screen, newcalc: false });
        }
      }
      else if (e.target.className.includes('decimal') && !screen.includes('.')) {
        if (!lastVal) {
          screen += '0' + val;
          this.setState({ screen });
        }
        if (lastVal >= 0 && lastVal <= 9) {
          screen += val;
          this.setState({ screen });
        } 
      }
      else if (e.target.className.includes('equal') && lastVal >= 0 && lastVal <= 9) {
        this.calculate();
      }
      else if (e.target.className.includes('clear')) {
          this.reset();
        }
    }
  }

  reset = () => {
    this.setState({
      screen: '',
      newCalc: false,
    })
  }

  calculate = () => {
    const value = this.state.screen;
    const result = eval(value).toString();
    this.setState({
      screen: result,
      newCalc: true
    })
  }

  render() {
    const screenValue = this.state.screen === '' ? 0 : this.state.screen;
    return (
      <div className="calculator">
        <div className="screen">
          {screenValue}
        </div>
        <div className="buttons" onClick={((e) => this.handleClick(e))}>
          <button value="C" className="btn clear">C</button>
          <button value="%" className="btn calc">&#37;</button>
          <button value="/" className="btn orange calc">&divide;</button>
          <button value="7" className="btn num">7</button>
          <button value="8" className="btn num">8</button>
          <button value="9" className="btn num">9</button>
          <button value="*" className="btn orange calc">&times;</button>
          <button value="4" className="btn num">4</button>
          <button value="5" className="btn num">5</button>
          <button value="6" className="btn num">6</button>
          <button value="-" className="btn orange calc">&minus;</button>
          <button value="1" className="btn num">1</button>
          <button value="2" className="btn num">2</button>
          <button value="3" className="btn num">3</button>
          <button value="+" className="btn orange calc">&#43;</button>
          <button value="0" className="btn num zero">0</button>
          <button value="." className="btn decimal">&middot;</button>
          <button value="=" className="btn orange equal">=</button>
        </div>
      </div>
    )
  }
}

export default App;
