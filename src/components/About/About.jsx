import React from "react";
import {Link} from "react-scroll";

const About = () => {
    return (
        <section className="aboutCont">
            {/* eslint-disable-next-line */}
            <a id="about"></a>
            <div className="aboutText">
                <h4 className="sectionTitle">About Me</h4>
                <p>
                    I am a Full Stack Web Developer and Lambda School Graduate.
                    I am so passionate about every aspect of software
                    development. It's very gratifying to see a complex problem
                    solved in an elegant way. I love seeing a project come
                    together after all the hard work that goes into it! And
                    probably most of all, I am always looking forward to
                    learning new things!
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
                <p>
                    I am seeking a remote Junior developer role. Unfortunately,
                    I am not able to relocate at this time. I'd love for my
                    first role to be with a great company that is doing
                    meaningful work. A team oriented culture that supports
                    continued learning and growth of it's developers is also
                    very important to me.
                </p>
                <br />
                <p>
                    Check out my skills and links below. I look forward to
                    discussing an amazing opportunity with you. See my{" "}
                    <Link
                        data-testid="contactLink"
                        to="contact"
                        smooth={true}
                        href="#contact"
                    >
                        links{" "}
                    </Link>
                    below and
                    <a
                        className="contactLinks"
                        href="https://docs.google.com/document/d/1H4bAd8P8GZ4yuAOvKbwWI0H7iukQamzsGYYEHGe-3_M/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        check out my resume.{" "}
                    </a>
                </p>
            </div>
        </section>
    );
};

export default About;
