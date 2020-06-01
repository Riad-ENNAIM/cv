import React, { useEffect, useState, useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import DropDownList from './DropDownList';

import ProfileContext from '../../context/profile/profileContext';

const Navbar = () => {
  const profileContext = useContext(ProfileContext);
  const { language } = profileContext;

  const [sticky, setSticky] = useState(false);

  const navRef = useRef(null);

  const handleScroll = () => {
    if (navRef.current) {
      setSticky(navRef.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className={sticky ? 'navbar-sticky' : ''} ref={navRef}>
      <ul>
        <li>
          <DropDownList />
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
