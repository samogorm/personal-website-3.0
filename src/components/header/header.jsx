import React from 'react';

import Logo from './../logo/Logo';
import brand from './../../assets/images/sam-pixel.png';
import { NavItemsContent } from './../../static-content/NavItemsContent';

import './header.scss';

const Header = () => {
  const scrollTo = (element) => {
    element = document.querySelector(element);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  return(
    <header className="header">
      <div className="header__brand">
        <button onClick={() => scrollTo('.introduction')} className="header__nav-anchor">
          <Logo
            image={ brand }
          />
        </button>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-items">
          { NavItemsContent.map((item, index) => (
            <li key={`nav-item-${index}`} className="header__nav-item">
              <button onClick={() => scrollTo(item.url)} className="header__nav-anchor">
                <span className="header__nav-icon">
                  <i className={item.icon}></i>
                </span>
                <span className="header__nav-text">
                  { item.title }
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
