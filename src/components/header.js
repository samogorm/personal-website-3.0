import PropTypes from 'prop-types'
import React from 'react'
import Navigation from './navigation/Navigation';

const Header = () => (
  <Navigation />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
