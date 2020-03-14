import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './expandable_content.scss';

const ExpandableContent = ({ title, secondTitle, subtitle, content, isToggled }) => {
  const [isOpen, setIsOpen] = useState(isToggled);

  return (
    <div className={isOpen ? 'expandable-content expandable-content--open' : 'expandable-content'}>
      <div className="expandable-content__title" onClick={() => setIsOpen(!isOpen)}>
        <div className="expandable-content__title-wrap">
          { title } at
          <span className="expandable-content__second-title">
            { secondTitle }
          </span>

          <span className="expandable-content__icon">
            { isOpen ? <i className="fa fa-chevron-down"></i> : <i className="fa fa-chevron-right"></i> }
          </span>
        </div>
        <span className="expandable-content__subtitle">
          { subtitle }
        </span>
      </div>
      <div className="expandable-content__content">
        <ul>
          { content.map((item, index) => (
            <li key={`exp-content-${index}`}>{ item }</li>
          ))}
        </ul>
      </div>
    </div>
  )
};

ExpandableContent.defaultProps = {
  isToggled: false
};

ExpandableContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array,
  isToggled: PropTypes.bool,
};

export default ExpandableContent;
