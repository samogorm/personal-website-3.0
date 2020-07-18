import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Text = ({ colour, font, size, tag: TagName, text, weight }) => (
  <TagName className={`text text--${colour} text--${TagName} text--size-${size} text--font-${font} text--weight-${weight}`}>
    { text }
  </TagName>
);

Text.defaultProps = {
  colour: 'black',
  font: 'default',
  size: 'xs',
  tag: 'h2',
  weight: 'bold'
};

Text.propTypes = {
  colour: PropTypes.string,
  font: PropTypes.string,
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  weight: PropTypes.string
};

export default Text;
