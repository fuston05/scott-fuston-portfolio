import React from 'react';

//styles
import './Contact.scss';

//components
import ContactForm from './ContactForm';

const Contact = ({ sendEmail, message, setMessage }) => {
  return (
    <section className='contactCont'>
      {/* eslint-disable-next-line */}
      <a id='contact'></a>
      <h4 className='sectionTitle'>Contact Me</h4>
      
      <div className='contactContentCont'>

        <div className='contactLeft'>
          <ul>
            <li>
              <a
                className='contactLinks'
                href="https://github.com/fuston05"
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className="contactIcon fab fa-github"></i>
                <span className= 'contactDetail'>GitHub</span>
              </a>
            </li>

            <li>
              <a
                className='contactLinks'
                href="https://www.linkedin.com/in/scott-fuston/"
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className="contactIcon fab fa-linkedin"></i>
                <span className= 'contactDetail'>LinkedIn</span>
            </a>
            </li>

            <li>
              <a
                className='contactLinks'
                href="tel:765-326-0293"
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className=" contactIcon fas fa-mobile-alt"></i>
                <span className= 'contactDetail'>(765)326-0293</span>
              </a>
            </li>

            <li>
              <a
                className='contactLinks'
                href="mailto:scott.a.fuston@gmail.com"
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className="contactIcon fas fa-envelope-open-text"></i>
                <span className= 'contactDetail'>scott.a.fuston@gmail.com</span>
              </a>
            </li>
          </ul>

        </div> {/* end contactSideBar */}
        <div className='contactRight'>
          <ContactForm
            sendEmail={sendEmail}
            message={message}
            setMessage={setMessage}
          />
        </div>
      </div>
    </section>
  )
}//end contact

export default Contact;
