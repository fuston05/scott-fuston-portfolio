import React, { useState } from 'react';
import emailjs from 'emailjs-com';

//styles
import './ContactForm.scss';

const ContactForm = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = e => {
    const templateParams = {
      from_name: formValue.name,
      reply_to: formValue.email,
      message_html: formValue.message + 'Phone: ' + formValue.phone
  };

  emailjs.send(
    'scott_a_fuston_gmail_com', 
    'template_lRAkjBq1',
    templateParams,
    'user_OmnELXQpZACwMtK9jkTqj'
    )
    .then(response => {
      console.log('SUCCESS!', response.status, response.text);
    }, err => {
      console.log('FAILED...', err);
    })

    e.preventDefault();
    //reset the form
    setFormValue({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  };

  const handleChange = e => {
    //add form values to state
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  }//end handleChange

  return (
    <>
      <form name= 'contact' onSubmit={handleSubmit}>
        <fieldset>
          <legend>Message Me</legend>
          <input type="text" placeholder='Name'
            name='name'
            id='name'
            onChange={handleChange}
            value={formValue.name}
          />
          <input type="email" placeholder='Email'
            name='email'
            id='email'
            onChange={handleChange}
            value={formValue.email}
          />
          <input type="text" placeholder='Phone'
            name='phone'
            id='phone'
            onChange={handleChange}
            value={formValue.phone}
          />
          <textarea
            name="message"
            id="message"
            value={formValue.message}
            onChange={handleChange}
            cols="30"
            rows="10"
            placeholder='Message'
          >
          </textarea>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    </>
  )
}//end ContactForm

export default ContactForm;
