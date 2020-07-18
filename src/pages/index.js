import React from 'react';

import Layout from '../client/components/layout';
import SEO from '../client/components/seo';
import Introduction from '../client/page-sections/introduction/introduction';
import Experience from '../client/page-sections/experience/experience';
import Projects from '../client/page-sections/projects/projects';
import Contact from '../client/page-sections/contact/contact';

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
