import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Introduction from './../page-sections/introduction/introduction';
import About from '../page-sections/about/about';
import Experience from '../page-sections/experience/experience';
import Projects from '../page-sections/projects/projects';
import Contact from '../page-sections/contact/contact';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Introduction />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
