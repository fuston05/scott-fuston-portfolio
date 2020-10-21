import React, { useState } from 'react';

//utils
import sendEmail from './utils/sendEmail';

//components
import {Header} from './components/Common';
import {Footer} from './components/Common';
import {ToTopArrow} from './components/Common';
import {SnackBar} from './components/Common';

import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const [message, setMessage] = useState('');

  return (
    <div className="App">
      {/* anchor used by the 'to-top' arrow */}
      {/* eslint-disable-next-line */}
      <a id='top' />
      <Header />
      <Portfolio />
      <About />
      <Skills />
      <SnackBar
        snackMessage={message}
      />
      <Contact
        sendEmail={sendEmail}
        message={message}
        setMessage={setMessage}
      />
      <Footer />
      <ToTopArrow />
    </div>
  );
}//end App

export default App;
