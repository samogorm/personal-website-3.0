import React from 'react';
import PropTypes from 'prop-types';

import './subtitle.scss';

const Subtitle = ({ text, colour }) => (
  <h5 className={`subtitle subtitle--${colour}`}>{ text }</h5>
);

Subtitle.defaultProps = {
  colour: 'navy',
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
};

export default Subtitle;
