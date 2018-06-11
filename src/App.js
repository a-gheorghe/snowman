import React, { Component } from 'react';
import CatButton from './CatButton';
import SnowMan from './SnowMan';
import Keyboard from './Keyboard';
import Modal from 'react-responsive-modal';
import seven from './snowman-pictures/seven.png';
import './App.css';
import './Keyboard.css';
import words from './words';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      wordLetters: '',
      guessed: [],
      wordStatus: [],
      wrong: 0,
      win: false,
      lose: false,
      done: false,
      letterIndices: {}
    }

    this.onCloseModal = () => {
      let allKbd = document.querySelectorAll("kbd")
      console.log('allKbd is ', allKbd)
      allKbd.forEach(key => key.className = "unclicked")
      // allKbd = allKbd.map(key => key.className = "unclicked")
      // allKbd.className = "unclicked"
      this.setState({
        wordLetters: '',
        letterIndices: {},
        done: false,
        guessed: [],
        wordStatus: [],
        wrong: 0,
        win: false,
        lose: false})
    }

    this.addGuess = (letter) => {
      let newGuessed = [...this.state.guessed, letter]
      let newStatus;
      let win = this.state.win;
      let lose = this.state.lose;
      let done = this.state.done;
      let newWrong;

      let keyButton = document.getElementById(letter)
      keyButton.className = "clicked"
      // if the letter is present in the word
      if (this.state.wordLetters.indexOf(letter) !== -1){
        newStatus = this.state.wordStatus.slice()
        for (let k = 0; k < this.state.letterIndices[letter].length; k++){
          newStatus[this.state.letterIndices[letter][k]] = letter
        }
        if (newStatus.indexOf(0) === -1){
          win = true
          done = true
        }
      this.setState({
        guessed: newGuessed,
        wordStatus: newStatus,
        win: win,
        done: done
      }, () => console.log ('guessed is ', this.state.guessed, 'wordStatus is ', this.state.wordStatus))
      // if the letter is not present in the word
    } else {
        newWrong = this.state.wrong + 1
      if (newWrong === 7){
        console.log('too many wrong')
        lose = true
        done = true
      }
      this.setState({
        guessed: newGuessed,
        wrong: newWrong,
        lose: lose,
        done: done,
      })
    }
  }



    this.chooseRandomWord = (category) => {
      let item = words[category][Math.floor(Math.random() * words[category].length)]
      this.setState({
        wordLetters: item.toLowerCase().split(""),
        wordStatus: new Array(item.length).fill(0)
      }, () => {
        for (let i = 0; i < this.state.wordLetters.length; i++){
          if (this.state.letterIndices.hasOwnProperty(this.state.wordLetters[i])) {
            console.log('already has property: ', this.state.wordLetters[i])
            this.state.letterIndices[this.state.wordLetters[i]].push(i)
          } else {
            console.log('does not have property: ', this.state.wordLetters[i])
            this.state.letterIndices[this.state.wordLetters[i]] = [i]
          }
        }
        console.log('this.state.letterIndices', this.state.letterIndices)
      });
    }
  }



  render() {
    console.log('this.state.wordLetters', this.state.wordLetters)
    console.log('this.state.wordStatus', this.state.wordStatus)
    return (
      <div className="App">
        <Modal open={this.state.done} onClose={this.onCloseModal} center>
          {this.state.win ? <h2> You win! </h2> : <h2> You lose </h2>}
        </Modal>
        <header className="App-header">
          <img src={seven} className="App-logo" alt="snowman-seven" />
          <h1 className="App-title">Snow Man </h1>
        </header>
        <div className="page-parent-flex">
          <div className="left-side">
            <div className="top-categories">
              <p className="App-intro">
                Keep the snowman from disappearing! Choose a category:
              </p>
              <div>
                {Object.keys(words).map((category, i) => <CatButton key={i} category={category} chooseRandomWord={this.chooseRandomWord} /> )}
              </div>
            </div>
            {}
            <div className="bottom-word">
              <div>
                <p>Guess the word:</p>
                {this.state.lose ?
                  this.state.wordLetters.map((letter, i) => <span> {letter} </span>) :
                  this.state.wordStatus.map((letter, i) => {
                    if (letter === 0) {
                      return (
                          <span> _____ </span>
                      )
                    } else {
                      return (
                          <span className="letter-span"> {letter} </span>
                      )
                    }
                  })}
                  <br/>
                Guesses: {this.state.guessed.map(guess => <span> {guess} </span>)}
              </div>
              <div id="keyboard-div">
                <Keyboard addGuess={this.addGuess}/>
              </div>
            </div>
          </div>
        <div className="right-side">
          <SnowMan wrong={this.state.wrong}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
