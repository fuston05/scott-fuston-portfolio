import React from 'react';

//components
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ToTopArrow from './components/ToTopArrow';

function App() {
  return (
    <div className="App">
      {/* anchor used by the 'to top' arrow */}
      {/* eslint-disable-next-line */}
      <a id='top' />

      <Header />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <ToTopArrow />
    </div>
  );
}//end App

export default App;
