import React from 'react';
import PropTypes from 'prop-types';

import { Footer } from './../components/footer/Footer';

import Header from './header/header';
import './../assets/fontawesome-pro-5.8.1-web/css/all.min.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{ children }</main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
