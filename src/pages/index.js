import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Introduction from './../page-sections/introduction/introduction';
import Experience from '../page-sections/experience/experience';
import Projects from '../page-sections/projects/projects';
import Contact from '../page-sections/contact/contact';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Introduction />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
