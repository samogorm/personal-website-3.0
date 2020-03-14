import React from 'react';

import ContactForm from './../../components/contact_form/contact_form';

import './contact.scss';

const Contact = () => (
  <section id="contact" className="contact">
    <div className="contact__form-wrapper">
      <ContactForm />
    </div>
  </section>
);

export default Contact;
