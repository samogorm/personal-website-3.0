import React from 'react';

import './index.scss';

const SocialIcons = ({ items, colour }) => (
  <div className={`social-icons social-icons--${colour}`}>
    { items.map(({ url, icon }, index) => {
      return (
        <a key={ `social-icon-${index}` } className="social-icons__icon" href={ url }>
          <i className={ icon }></i>
        </a>
      );
    }) }
  </div>
);

export default SocialIcons;