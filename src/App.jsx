import React from "react";

//components
import {Header} from "./components/Common";
import {Footer} from "./components/Common";
import {ToTopArrow} from "./components/Common";

import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App = () => {
    return (
        <div className="App">
            {/* anchor used by the 'to-top' arrow */}
            {/* eslint-disable-next-line */}
            <a id="top" />
            <Header />
            <Portfolio />
            <About />
            <Skills />
            <Contact />
            <Footer />
            <ToTopArrow />
        </div>
    );
};

export default App;
