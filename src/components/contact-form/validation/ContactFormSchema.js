import * as Yup from 'yup';

const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is required.'),
    email: Yup.string()
      .email('Invalid email address.')
      .required('Email is required.'),
    message: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Message is required.'),
  });

  export default ContactFormSchema;