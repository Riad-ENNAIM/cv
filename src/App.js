import React from 'react';

import Header from './components/layout/Header';
import Experience from './components/experience/Experience';
import Timeline from './components/timeline/Timeline';
import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      {/* <Experience /> */}
      <Timeline />
      <Footer />
    </>
  );
}

export default App;
