import React from 'react';

//components
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}//end App

export default App;
