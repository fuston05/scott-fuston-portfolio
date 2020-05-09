import React, { useState } from 'react';

//styles
import './ContactForm.scss';

const ContactForm = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    //resets the form
    setFormValue({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  }//end handleSubmit

  const handleChange = e => {
    //add form values to state
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  }//end handleChange

  return (
    <>
      <form onSubmit={handleSubmit}>
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
