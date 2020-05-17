import React, {useState} from 'react';

//utils
import sendEmail from './utils/sendEmail';

//components
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import SnackBar from './components/SnackBar';
import Footer from './components/Footer';
import ToTopArrow from './components/ToTopArrow';

function App() {
  const [message, setMessage]= useState('');

  return (
    <div className="App">
      {/* anchor used by the 'to top' arrow */}
      {/* eslint-disable-next-line */}
      <a id='top' />
      <Header />
      <Portfolio />
      <About />
      <Skills />
      <Contact 
        sendEmail= {sendEmail}
        message= {message}
        setMessage= {setMessage}
      />
      <SnackBar 
        
      />
      <Footer />
      <ToTopArrow />
    </div>
  );
}//end App

export default App;
