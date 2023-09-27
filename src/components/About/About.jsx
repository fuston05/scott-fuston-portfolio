import React from "react";

const About = () => {
    return (
        <section className="aboutCont">
            {/* eslint-disable-next-line */}
            <a id="about"></a>
            <div className="aboutText">
                <h4 className="sectionTitle">About Me</h4>
                <p>
                    I am currently an Automation Engineer working in both web
                    and mobile test automation. I helpled architect and build
                    our current automation frameworks for both web and mobile.
                    Some of the technologies used are Cypress, Appium,
                    Webdriver.io, and Saucelabs.
                </p>
                <br />
                <p>
                    For me It's not just about the code, cross-functional team
                    collaboration is an incredible experience that has a way of
                    bringing people together and building great friendships. A
                    good, diverse team leads to increased creativity,
                    productivity, and often to some very unique implementations.
                </p>
                <br />
                {/* <p>
                    I am seeking a remote Automation Engineer or Junior developer role.
                    I am not willing to relocate at this time. I'd love to work for a 
                    great company that is doing meaningful work. A team oriented culture 
                    that supports continued learning and growth of it's developers is also
                    very important to me.
                </p> */}
                <br />
                {/* <p>
                    Check out my skills and links below. I look forward to
                    discussing an amazing opportunity with you. See my{" "}
                    <Link
                        data-testid="contactLink"
                        to="contact"
                        smooth={true}
                        href="#contact">
                        links{" "}
                    </Link>
                    below and{" "}
                    <a
                        className="contactLinks"
                        href="https://docs.google.com/document/d/1H4bAd8P8GZ4yuAOvKbwWI0H7iukQamzsGYYEHGe-3_M/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer">
                        check out my resume.{" "}
                    </a>
                </p> */}
            </div>
        </section>
    );
};

export default About;
