import React from "react";
import {Link} from "react-scroll";

const About: React.FC = () => {
    return (
        <section className="aboutCont">
            {/* eslint-disable-next-line */}
            <a id="about"></a>
            <div className="aboutText">
                <h4 className="sectionTitle">About Me</h4>
                <p>
                    I am a Full Stack Web Developer and recent Lambda School
                    Graduate. I don't even have the words to express how excited
                    I am to begin searching for my dream job! I am so passionate
                    about every aspect of software development. It's very
                    gratifying to see a complex problem solved in an elegant
                    way. I love seeing a project come together after all the
                    hard work that goes into it! And probably most of all, I am
                    always looking forward to learning new things!
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
                    Check out my skills and links below. I look forward to
                    discussing an amazing opportunity with you. You can get in
                    touch with me and{" "}
                    <Link
                        data-testid="contactLink"
                        to="contact"
                        smooth={true}
                        href="#contact"
                    >
                        download my resume below
                    </Link>{" "}
                    below.
                </p>
            </div>
        </section>
    );
}; //end About

export default About;
