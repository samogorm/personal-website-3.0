import React from 'react';

import ContactForm from './../../contact_form';
import Text from './../../text';

import './contact.scss';

const Contact = ({ socialItems }) => (
  <section id="contact" className="contact">
    <Text
      text="Contact"
      tag="h2"
      size="xxl"
    />
   <div className="contact__form-wrapper">
    <ContactForm />
   </div>
   <div className="contact__social-icons">
      {socialItems.map(({ url, icon }, index) => {
        return (
          <a key={ `social-icon-${index}` } className="social-media-icon" href={ url }>
            <i className={ icon }></i>
          </a>
        )
      })}
    </div>
  </section>
);

export default Contact;
