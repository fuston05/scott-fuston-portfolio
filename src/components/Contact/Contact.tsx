import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contactCont">
      {/* eslint-disable-next-line */}
      <a id="contact"></a>
      <h4 className="sectionTitle">Contact Me</h4>

      <ul className="contactLinksCont">
        <li>
          <a
            className="contactLinks"
            href="https://github.com/fuston05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="contactIcon fab fa-github"></i>
          </a>
        </li>

        <li>
          <a
            className="contactLinks"
            href="https://www.linkedin.com/in/scott-fuston/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="contactIcon fab fa-linkedin"></i>
          </a>
        </li>

        <li>
          <a
            className="contactLinks"
            href="tel:765-326-0293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" contactIcon fas fa-mobile-alt"></i>
          </a>
        </li>

        <li>
          <a
            className="contactLinks"
            href="mailto:scott.a.fuston@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="contactIcon fas fa-envelope-open-text"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}; //end contact

export default Contact;
