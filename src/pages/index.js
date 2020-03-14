import React from 'react';

// Custom Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Introduction from './../page-sections/introduction/introduction';
import About from '../page-sections/about/about';
import Experience from '../page-sections/experience/experience';
import Projects from '../page-sections/projects/projects';

import {CallToAction} from './../components/call-to-action/CallToAction';
import {ContactForm} from './../components/contact-form/ContactForm';


import './../styles/index.css'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Introduction />
      <About />
      <Experience />
      <Projects />

      {/* Contact Form */}
      <section id="contact" className="contact">
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
