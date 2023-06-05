import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => leaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};
