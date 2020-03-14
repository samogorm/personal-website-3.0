import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({ text, colour, tag: TagName }) => (
  <TagName className={`title title--${colour}`}>
    { text }
  </TagName>
);

Title.defaultProps = {
  colour: 'navy',
  tag: 'h2',
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  colour: PropTypes.string,
  tag: PropTypes.string,
};

export default Title;
