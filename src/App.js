import React from 'react';

//components
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToTopArrow from './components/ToTopArrow';

function App() {
  return (
    <div className="App">
      {/* // eslint-disable-next-line */}
      {/* anchor used by the 'to top' arrow */}
      <a id='top' />
      
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <ToTopArrow />
    </div>
  );
}//end App

export default App;
