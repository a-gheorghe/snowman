import React, { Component } from 'react';
import seven from './snowman-pictures/seven.png';
import six from './snowman-pictures/six.png';
import five from './snowman-pictures/five.png';
import four from './snowman-pictures/four.png';
import three from './snowman-pictures/three.png';
import two from './snowman-pictures/two.png';
import one from './snowman-pictures/one.png';
import baseline from './snowman-pictures/baseline.png';
import './App.css';

class SnowMan extends Component {
  render() {
    let image = seven
    if (this.props.wrong === 1) {
      image = six
    } else if (this.props.wrong === 2) {
      image = five
    } else if (this.props.wrong === 3) {
      image = four
    } else if (this.props.wrong === 4) {
      image = three
    } else if (this.props.wrong === 5) {
      image = two
    } else if (this.props.wrong === 6) {
      image = one
    } else if (this.props.wrong === 7) {
      image = baseline
    }
    return (
      <img src={image} />
    );
  }
}

export default SnowMan;
