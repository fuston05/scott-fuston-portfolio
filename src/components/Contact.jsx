import React from 'react';

//styles
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contactCont'>
      {/* eslint-disable-next-line */}
      <a id='contact'></a>
      <h4 className='sectionTitle'>Contact Me</h4>
      <div>
        <div className='contactSideBar'>
          <ul>
            <li>
              <i class="contactIcon fab fa-linkedin"></i>
              <a
                className= 'contactLinks'
                href="https://www.linkedin.com/in/scott-fuston/"
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
            </a>
            </li>
            <li>
              <i class=" contactIcon fas fa-mobile-alt"></i>
              <a
                className= 'contactLinks'
                href="tel:765-891-0712"
                target='_blank'
                rel='noopener noreferrer'
              >
                (765)891-0712
              </a>
            </li>
            <li>
            <i class="contactIcon fab fa-github"></i>
              <a
                className= 'contactLinks'
                href="https://github.com/fuston05"
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </li>
            <li>
            <i class="contactIcon fas fa-envelope-open-text"></i>
              <a
                className= 'contactLinks'
                href="mailto:scott.a.fuston@gmail.com"
                target='_blank'
                rel='noopener noreferrer'
              >
                scott.a.fuston@gmail.com
              </a>
            </li>
          </ul>
        </div> {/* end contactSideBar */}
        <div className='contactMain'></div>
      </div>
    </div>
  )
}//end contact

export default Contact;
