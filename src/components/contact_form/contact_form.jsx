import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import qs from 'qs';

import ContactFormSchema from './validation/ContactFormSchema';
import Paragraph from './../paragraph/paragraph';

import './contact_form.scss';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmitting: null,
      success: null,
      error: null,
      name: '',
      email: '',
      message: ''
    }
  }

  render = () => {
      return(
        <div className='contact-form'>
          <div className="contact-form__info">
            <h3>Let's Chat</h3>
            <Paragraph
                text="I endeavour to reply within 24 hours"
            />
          </div>
          <Formik
            initialValues={{
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
                "bot-field": "",
                "form-name": "contact"
            }}
            validationSchema={ContactFormSchema}
            onSubmit={(values, {resetForm}) => {
                this._postContactFormData(values);
                resetForm();
            }}
            >
              {({ errors, touched }) => (
                <Form data-netlify="true" name="contact" data-netlify-honeypot="bot-field">
                  <div className="contact-form__form-group">
                    <label htmlFor="name" className="contact-form__form-label">Name</label>
                    <Field id="name" name="name" component="input" placeholder="Enter your full name..." />
                    {errors.name && touched.name ? (
                    <div className="contact-form__form-error">{errors.name}</div>
                    ) : null}
                  </div>
                  
                  <div className="contact-form__form-group">
                  <label htmlFor="email" className="contact-form__form-label">Email</label>
                    <Field id="email" name="email" type="email" component="input" placeholder="Enter your email..." />
                  {errors.email && touched.email ? <div className="contact-form__form-error">{errors.email}</div> : null}
                  </div>
                  
                  <div className="contact-form__form-group">
                  <label htmlFor="message" className="contact-form__form-label">Message</label>
                    <Field id="message" name="message" type="message" component="textarea" placeholder="Enter your message..." />
                  {errors.message && touched.message ? <div className="contact-form__form-error">{errors.message}</div> : null}
                  </div>

                <div className="contact-form__button">
                    {this._renderFormButton()}
                  </div>

                <div className="contact-form__reset">
                    {this._renderResetFormComponent()}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
      )
    }

    /**
     * Renders different style button depending on whether the component state is submitting.
     */
    _renderFormButton = () => {
      if(this.state.success !== null) {
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
    }


    _renderResetFormComponent = () => {
        if(this.state.success) {
            return(
                <button onClick={() => this._resetForm()}> Reset Form</button>
            )
        }

        return null;
    }

    /**
     * Resets state on the form.
     */
    _resetForm = () => {
        this.setState({
            success: null,
            isSubmitting: null,
            error: null,
            name: '',
            email: '',
            message: ''
        })
    }

    /**
    * Posts contact form data to API endpoint.
    * @param {Object} data the data to be sent.
    */
    _postContactFormData = (data) => {
        let config = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify(data)
        }

        this.setState({ isSubmitting: true });

        return fetch('/', config)
            .then(() => {
                this.setState({ success: true })
            })
            .catch(error => {
                this.setState({ success: false });
                console.log("Error: ", error);
            });
    }

}

export default ContactForm;
