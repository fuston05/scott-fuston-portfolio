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

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formValue })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
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
