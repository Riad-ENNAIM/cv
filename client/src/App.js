import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import SearchPage from './components/pages/SearchPage';
import SkillsPage from './components/pages/SkillsPage';
import ProjectsPage from './components/pages/ProjectsPage';
import TrainingPage from './components/pages/TrainingPage';
import ReviewsPage from './components/pages/ReviewsPage';
import Footer from './components/layout/Footer';

import NavbarState from './context/navbar/NavbarState';
import ReviewState from './context/review/ReviewState';

import './App.css';

const App = () => {
  return (
    <NavbarState>
      <ReviewState>
        <Router>
          <Header />
          <div className="page">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/skills" component={SkillsPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/training" component={TrainingPage} />
              <Route exact path="/reviews" component={ReviewsPage} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </ReviewState>
    </NavbarState>
  );
}

export default App;