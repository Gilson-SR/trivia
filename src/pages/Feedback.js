import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number } from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { assertions, score } = this.props;
    let feedbackText = null;
    const checkNumber = 3;
    if (assertions < checkNumber) {
      feedbackText = <p data-testid="feedback-text">Could be better...</p>;
    }
    if (assertions >= checkNumber) {
      feedbackText = <p data-testid="feedback-text">Well Done!</p>;
    }

    return (
      <div>
        <Header />
        {feedbackText}
        <p data-testid="feedback-total-score">{score}</p>
        <p data-testid="feedback-total-question">{assertions}</p>
        <Link
          data-testid="btn-play-again"
          to="/"
        >
          Play Again
        </Link>
        <Link
          data-testid="btn-ranking"
          to="/ranking"
        >
          Ranking
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

Feedback.propTypes = {
  correct: number,
  score: number,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
