import React, { Component } from 'react';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">ols</p>
      </div>
    );
  }
}

export default Feedback;
