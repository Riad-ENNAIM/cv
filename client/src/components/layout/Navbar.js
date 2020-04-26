import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavbarContext from '../../context/navbar/navbarContext';

const Navbar = () => {
  const navbarContext = useContext(NavbarContext);
  const { activeTab, isTimeline, toggleTimeline } = navbarContext;

  useEffect(() => {
    setTab(activeTab);
  }, [navbarContext, activeTab]);

  const [tab, setTab] = useState(null);

  return (
    <nav id="navbar">
      <ul>
        <li><Link to="/search" className={`search ${tab === 'search' ? 'active' : ''}`}><i className="fas fa-search"></i></Link></li>
        <li><Link to="/" className={tab === null || tab === 'experiences' ? 'active' : ''}>Expérience</Link></li>
        <li><Link to="/projects" className={tab === 'projects' ? 'active' : ''}>Projets</Link></li>
        <li><Link to="/skills" className={tab === 'skills' ? 'active' : ''}>Compétence</Link></li>
        <li><Link to="/training" className={tab === 'training' ? 'active' : ''}>Formation</Link></li>
        <li><Link to="/reviews" className={tab === 'reviews' ? 'active' : ''}>Commentaires</Link></li>
        {
          activeTab === 'experiences' || activeTab === 'projects' ?
            <li className="timeline-switcher">
              Chronologie
              <label className="switch">
                <input type="checkbox" checked={isTimeline} onChange={() => toggleTimeline()}/>
                <span className="slider"></span>
              </label>
            </li>
          :
            null
        }
      </ul>
    </nav>
  );
}

export default Navbar;
