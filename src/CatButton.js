import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import './App.css';



class CatButton extends Component {
  render() {
    return (
      <Button variant="contained" color="primary" onClick={() => this.props.chooseRandomWord(this.props.category)}> {this.props.category} </Button>
    );
  }
}

export default CatButton;
