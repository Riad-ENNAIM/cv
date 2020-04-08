import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import SearchPage from './components/pages/SearchPage';
import Timeline from './components/pages/Timeline';
import SkillsPage from './components/pages/SkillsPage';
import FreelancePage from './components/pages/FreelancePage';
import AcademicPage from './components/pages/AcademicPage';
import Footer from './components/layout/Footer';

import NavbarState from './context/navbar/NavbarState';

import './App.css';

const App = () => {
  return (
    <NavbarState>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/freelance" component={FreelancePage} />
          <Route exact path="/projects" component={AcademicPage} />
        </Switch>
        <Footer />
      </Router>
    </NavbarState>
  );
}

export default App;
