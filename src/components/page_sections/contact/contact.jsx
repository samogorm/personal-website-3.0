import React from 'react';

import ContactForm from './../../contact_form';
import SocialIcons from './../../social_icons';
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
    <SocialIcons items={ socialItems } colour="steel" />
  </section>
);

export default Contact;
