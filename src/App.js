import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Experience from './components/experience/Experience';
import Timeline from './components/timeline/Timeline';
import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
          <Route exact path="/" component={Experience} />
          <Route exact path="/timeline" component={Timeline} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
