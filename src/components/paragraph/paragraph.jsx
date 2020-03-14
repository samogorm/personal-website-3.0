import React from 'react';
import PropTypes from 'prop-types';

import './paragraph.scss'

const Paragraph = ({ text, colour }) => (
  <p className={`paragraph paragraph--${colour}`}>
    { text }
  </p>
);

Paragraph.defaultProps = {
  colour: 'navy',
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  colour: PropTypes.string,
};

export default Paragraph;
