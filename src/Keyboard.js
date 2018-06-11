import React, { Component } from 'react';
import './Keyboard.css'

class Keyboard extends Component {
  render() {
    return (
      <div className="keyboard-container">
        <div id="keyboard">
          <div id="first-row" className="keyboard-row">
            <kbd id="q" onClick={() => this.props.addGuess('q')}>q</kbd>
            <kbd id="w"onClick={() => this.props.addGuess('w')}>w</kbd>
            <kbd id="e" onClick={() => this.props.addGuess('e')}>e</kbd>
            <kbd id="r" onClick={() => this.props.addGuess('r')}>r</kbd>
            <kbd id="t" onClick={() => this.props.addGuess('t')}>t</kbd>
            <kbd id="y" onClick={() => this.props.addGuess('y')}>y</kbd>
            <kbd id="u" onClick={() => this.props.addGuess('u')}>u</kbd>
            <kbd id="i" onClick={() => this.props.addGuess('i')}>i</kbd>
            <kbd id="o" onClick={() => this.props.addGuess('o')}>o</kbd>
            <kbd id="p" onClick={() => this.props.addGuess('p')}>p</kbd>
          </div>
          <div id="second-row" className="keyboard-row">
            <kbd id="a" onClick={() => this.props.addGuess('a')}>a</kbd>
            <kbd id="s" onClick={() => this.props.addGuess('s')}>s</kbd>
            <kbd id="d" onClick={() => this.props.addGuess('d')}>d</kbd>
            <kbd id="f" onClick={() => this.props.addGuess('f')}>f</kbd>
            <kbd id="g" onClick={() => this.props.addGuess('g')}>g</kbd>
            <kbd id="h" onClick={() => this.props.addGuess('h')}>h</kbd>
            <kbd id="j" onClick={() => this.props.addGuess('j')}>j</kbd>
            <kbd id="k" onClick={() => this.props.addGuess('k')}>k</kbd>
            <kbd id="l" onClick={() => this.props.addGuess('l')}>l</kbd>
          </div>
          <div id="third-row" className="keyboard-row">
            <kbd id="z" onClick={() => this.props.addGuess('z')}>z</kbd>
            <kbd id="x" onClick={() => this.props.addGuess('x')}>x</kbd>
            <kbd id="c" onClick={() => this.props.addGuess('c')}>c</kbd>
            <kbd id="v" onClick={() => this.props.addGuess('v')}>v</kbd>
            <kbd id="b" onClick={() => this.props.addGuess('b')}>b</kbd>
            <kbd id="n" onClick={() => this.props.addGuess('n')}>n</kbd>
            <kbd id="m" onClick={() => this.props.addGuess('m')}>m</kbd>
          </div>
        </div>
      </div>
    )
  }
}

export default Keyboard;
