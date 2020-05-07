import React, { useContext } from 'react';
import { useLocation } from "react-router";
import { NavLink } from 'react-router-dom';

import ProfileContext from '../../context/profile/profileContext';

const Navbar = () => {
  const location = useLocation();
  const profileContext = useContext(ProfileContext);
  const { isTimeline, toggleTimeline } = profileContext;

  return (
    <nav id="navbar">
      <ul>
        <li>
          <NavLink exact to="/search" className="search-link" activeClassName="active">
            <i className="fas fa-search"></i>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Expérience
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/projects" activeClassName="active">
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/skills" activeClassName="active">
            Compétence
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/training" activeClassName="active">
            Formation
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/reviews" activeClassName="active">
            Commentaires
          </NavLink>
        </li>
        
        {
          (location.pathname === '/' || location.pathname === '/projects' || location.pathname === '/training') &&
          <li className="timeline-switcher">
            Chronologie
            <label className="switch">
              <input type="checkbox" checked={isTimeline} onChange={() => toggleTimeline()}/>
              <span className="slider"></span>
            </label>
          </li>
        }
      </ul>
    </nav>
  );
}

export default Navbar;
