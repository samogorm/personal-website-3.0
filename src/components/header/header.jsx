import React, { useState } from 'react';

import Logo from './../logo/logo';
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
        <a href="/">
          <Logo
            image={ brand }
          />
        </a>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-items">
          { NavItemsContent.map((item, index) => (
            <li key={`nav-item-${index}`} className="header__nav-item">
              <a onClick={() => scrollTo(item.url)} className="header__nav-anchor">
                { item.title }
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
