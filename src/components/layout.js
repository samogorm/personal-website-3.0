import React from 'react';
import PropTypes from 'prop-types';

import Footer from './../components/footer';
import './../assets/fontawesome-pro-5.8.1-web/css/all.min.css';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{ children }</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
