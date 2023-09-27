import React from "react";

const Contact = () => {
    return (
        <section className="contactCont">
            {/* eslint-disable-next-line */}
            <a id="contact"></a>
            <h4 className="sectionTitle">Contact Me</h4>

            <ul className="contactLinksCont">
                <li title="See my GitHub">
                    <a
                        className="contactLinks"
                        href="https://github.com/fuston05"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="contactIcon fab fa-github"></i>
                    </a>
                </li>

                <li title="LinkedIn">
                    <a
                        className="contactLinks"
                        href="https://www.linkedin.com/in/scott-fuston/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="contactIcon fab fa-linkedin"></i>
                    </a>
                </li>

                <li title="Call me">
                    <a
                        className="contactLinks"
                        href="tel:765-605-1740"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className=" contactIcon fas fa-mobile-alt"></i>
                    </a>
                </li>

                <li title="email">
                    <a
                        className="contactLinks"
                        href="mailto:scott.a.fuston@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="contactIcon fas fa-envelope-open-text"></i>
                    </a>
                </li>
                <li title="Downloaad My Resume">
                    <a
                        className="contactLinks"
                        href="https://docs.google.com/document/d/1H4bAd8P8GZ4yuAOvKbwWI0H7iukQamzsGYYEHGe-3_M/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="contactIcon far fa-file"></i>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Contact;
