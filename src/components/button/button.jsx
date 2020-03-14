import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const scrollToElement = (element) => {
  element = document.querySelector(element);
  element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
};

const Button = ({
  icon,
  label,
  url,
  type,
  colour,
  scrollTo
}) => (
  <button
    onClick={() => scrollTo ? scrollToElement(url) : window.location(url)}
      className={`button button--${type} button--${colour}`}
  >
    { icon && (<i className={ icon }></i> )}
    { label }
  </button>
);

Button.defaultProps = {
  scrollTo: false,
  colour: 'navy',
};

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  colour: PropTypes.string,
  scrollTo: PropTypes.bool,
};

export default Button;
