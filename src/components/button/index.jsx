import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const scrollToElement = (element) => {
  element = document.querySelector(element);
  element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
};

const Button = ({
  icon,
  label,
  url,
  fillStyle,
  colour,
  scrollTo,
  type
}) => (
  <button
    type={ type }
    onClick={() => {
      if (type !== 'submit') {
        scrollTo ? scrollToElement(url) : window.open(url);
      }
    }}
    className={`button button--${fillStyle} button--${colour}`}
  >
    { label }
    { icon && (<i className={ icon }></i> )}
  </button>
);

Button.defaultProps = {
  scrollTo: false,
  colour: 'navy',
  type: 'button'
};

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
  fillStyle: PropTypes.string.isRequired,
  colour: PropTypes.string,
  scrollTo: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
