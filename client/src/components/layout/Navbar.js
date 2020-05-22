import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import ProfileContext from '../../context/profile/profileContext';

const Navbar = () => {
  const profileContext = useContext(ProfileContext);
  const { language, isTimeline, toggleTimeline, toggleLanguage } = profileContext;

  const changeLang = lang => {
    if(language && lang !== language) {
      toggleLanguage();
    }
  }

  return (
    <nav id="navbar">
      <ul>
        <li>
          <span className="dropbtn">
            <i className="fas fa-cog"></i>
          </span>

          <div className="dropdown-content">
            <div className="switcher">
              <div className="switcher-title">{language === 'eng' ? 'Timeline' : 'Chronologie'}</div>
              <div className="switcher-body">
                <label className="switch">
                  <input type="checkbox" checked={isTimeline} onChange={() => toggleTimeline()}/>
                  <span className="slider"></span>
                </label>
              </div>
            </div>

            <div className="switcher">
              <div className="switcher-title">{language === 'eng' ? 'Language' : 'Langue'}</div>
              <div className="switcher-body">
                <span
                  className={`lang ${language !== 'eng' && 'active' }`}
                  onClick={() => changeLang('fr')}
                >
                  Fr
                </span>
                <span
                  className={`lang ${language === 'eng' && 'active' }`}
                  onClick={() => changeLang('eng')}
                >
                  Eng
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <NavLink exact to="/search" className="search-link" activeClassName="active">
            <i className="fas fa-search"></i>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            {language === 'eng' ? 'Experience' : 'Expérience'}
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/projects" activeClassName="active">
            {language === 'eng' ? 'Projects' : 'Projets'}
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/skills" activeClassName="active">
            {language === 'eng' ? 'Skills' : 'Compétence'}
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/training" activeClassName="active">
            {language === 'eng' ? 'Training' : 'Formation'}
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/reviews" activeClassName="active">
            {language === 'eng' ? 'Reviews' : 'Commentaires'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
