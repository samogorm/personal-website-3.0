import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import qs from 'qs';

import ContactFormSchema from './validation/ContactFormSchema';
import Paragraph from './../paragraph/paragraph';

import './contact_form.scss';

const ContactForm = () => {
  const [ success, setSuccess ] = useState(null);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  const renderFormButton = () => {
    if (success !== null) {
      return (
        <button type="button" className="button button--fill button--navy">
          <i className="far fa-envelope"></i>
          Message Sent!
        </button>
      );
    }

    return (
      <button type="submit" className="button button--fill button--blue">
        <i className="far fa-envelope-open-text"></i>
        Send Message
      </button>
    );
  };

  const postContactFormData = data => {
    const config = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify(data)
    }

    return fetch('/', config)
      .then(() => setSuccess(true))
      .catch(error => {
        setSuccess(false);
        console.log("Error: ", error);
      });
  };

  const resetForm = () => {
    setSuccess(null);
    setName('');
    setEmail('');
    setMessage('');
  };

  const renderResetFormComponent = () => success ? (<button onClick={() => resetForm()}> Reset Form</button>) : null;

  return (
    <div className='contact-form'>
      <Formik
        initialValues={{
          name: name,
          email: email,
          message: message,
          "bot-field": "",
          "form-name": "contact"
        }}
        validationSchema={ ContactFormSchema }
        onSubmit={(values, { resetForm }) => {
          postContactFormData(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form data-netlify="true" name="contact" data-netlify-honeypot="bot-field">
            <div className="contact-form__form-group">
              <label htmlFor="name" className="contact-form__form-label">Name</label>
              <Field id="name" name="name" component="input" placeholder="Enter your full name..." />
              { errors.name && touched.name ? (
                <div className="contact-form__form-error">{ errors.name }</div>
              ) : null}
            </div>

            <div className="contact-form__form-group">
              <label htmlFor="email" className="contact-form__form-label">Email</label>
              <Field id="email" name="email" type="email" component="input" placeholder="Enter your email..." />
              { errors.email && touched.email ? <div className="contact-form__form-error">{ errors.email }</div> : null}
            </div>

            <div className="contact-form__form-group">
              <label htmlFor="message" className="contact-form__form-label">Message</label>
              <Field id="message" name="message" type="message" component="textarea" placeholder="Enter your message..." />
              { errors.message && touched.message ? <div className="contact-form__form-error">{ errors.message }</div> : null}
            </div>

            <div className="contact-form__button">
              { renderFormButton() }
            </div>

            <div className="contact-form__reset">
              { renderResetFormComponent() }
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
