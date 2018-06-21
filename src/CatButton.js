import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';



class CatButton extends Component {
  render() {
    return (
      <Button variant="contained" color="primary" onClick={() => this.props.chooseRandomWord(this.props.category)}> {this.props.category} </Button>
    );
  }
}

export default CatButton;
