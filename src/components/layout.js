import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { themeColours } from './../constants/themeColours';

import Header from './header'
import './../assets/fontawesome-pro-5.8.1-web/css/all.min.css'
import './layout.css'

const getRandomColor = () => {
  return themeColours[Math.floor(Math.random() * themeColours.length)]
}

const Layout = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState('green');

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let colour = getRandomColor();
  if (colour.name !== 'navy') setActiveTheme(colour.name);

  // document.querySelector('.intro-section').addEventListener('click', () => {
  //   let colour = getRandomColor();
  //   if (colour.name !== 'navy') setActiveTheme(colour.name);
  // })

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={`${activeTheme}-theme`}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
