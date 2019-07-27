import React, {Component} from 'react';
import { Formik, Form, Field } from 'formik';
import ContactFormSchema from './validation/ContactFormSchema';
import Paragraph from './../paragraph/Paragraph';

import './ContactForm.css';

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

        this._postContactFormData = this._postContactFormData.bind(this);
    }
    render = () => {
        return(
            <div className='contact-form'>
                <div className="contact-form-info">
                    <h3>Let's Chat</h3>
                    <Paragraph
                        text="I endeavour to reply within 24 hours"
                    />
                </div>
                 <Formik
                    initialValues={{
                        name: this.state.name,
                        email: this.state.email,
                        message: this.state.message
                    }}
                    validationSchema={ContactFormSchema}
                    onSubmit={(values, {resetForm}) => {
                        // same shape as initial values
                        this._postContactFormData(values);
                        resetForm();
                    }}
                    >
                    {({ errors, touched }) => (
                        <Form data-netlify="true">
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <Field name="name" component="input" placeholder="Enter your full name..." />
                                {errors.name && touched.name ? (
                                    <div className="form-error">{errors.name}</div>
                                ) : null}
                            </div>
                            
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <Field name="email" type="email" component="input" placeholder="Enter your email..." />
                                {errors.email && touched.email ? <div className="form-error">{errors.email}</div> : null}
                            </div>
                            
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <Field name="message" type="message" component="textarea" placeholder="Enter your message..." />
                                {errors.email && touched.email ? <div className="form-error">{errors.email}</div> : null}
                            </div>

                            <div className="contact-form-button">
                                {this._renderFormButton()}
                            </div>

                            <div className="reset-contact-form">
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
            // clear the form
            return (
                <button type="button" className="contact-button" style={{backgroundImage:  `linear-gradient(90deg, #21D4FD 0%, #2AF598 100%)`}}>
                    <i className="far fa-envelope"></i> Message Sent!
                </button>
            )
        }
        
        return (
            <button type="submit" className="contact-button" style={{backgroundImage: `linear-gradient(90deg, #F7CE68 0%, #FBAB7E 100%)`}}>
                <i className="far fa-envelope-open-text"></i>  Send Message
            </button>
        )
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
        let body = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        let config = {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
            },
            body: JSON.stringify(body)
        }

        this.setState({isSubmitting: true});

        // Todo: Move API endpoint to .env file.
        return fetch('http://localhost:1337/contacts', config)
            .then(response => response.json()
                .then(contactForm => ({contactForm, response}))
                .then(({contactForm, response}) => {
                    if(!response.ok) {
                        this.setState({success: false})
                        return Promise.reject(contactForm);
                    }
                    this.setState({success: true})
                    return Promise.resolve(contactForm);
                })
            )
            .catch(error => {
                this.setState({error: error})
                console.log(error);
            });
    }

}

export default ContactForm;