import React from "react";

const About = () => {
    return (
        <section className="aboutCont">
            {/* eslint-disable-next-line */}
            <a id="about"></a>
            <div className="aboutText">
                <h4 className="sectionTitle">About Me</h4>
                <p>
                    I am currently an Automation Engineer working with both web
                    and mobile. I helped architect and build our current
                    automation frameworks for both web and mobile. Some
                    technologies used are Cypress, Webdriver.io, and
                    Saucelabs.
                </p>
                <br />
                <p>
                    I also build scripts that streamline QA workflows. One
                    script gathers all issues linked to a Jira rollout card
                    and adds them as test cases to the corresponding TestRail
                    rollout. I have also created scripts that generate weekly
                    reports comparing automated tests with TestRail cases,
                    helping the team keep both in sync. These are just a couple
                    of examples of the scripts I’ve built to streamline QA
                    workflows.
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
                <p>
                    Check out some of my skills and contact information below. I look forward to discussing an amazing opportunity with you.
                </p>
            </div>
        </section>
    );
};

export default About;
