import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Avatar = ({ alt, src }) => {
  return (
    <div className="avatar">
      <img 
        className="avatar__image" 
        alt={ alt } 
        src={ src }
      />
    </div>
  );
};

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Avatar;
