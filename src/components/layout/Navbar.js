import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavbarContext from '../../context/navbar/navbarContext';

const Navbar = () => {
  const navbarContext = useContext(NavbarContext);
  const { activeTab } = navbarContext;

  useEffect(() => {
    setTab(activeTab);
  }, [navbarContext, activeTab]);

  const [tab, setTab] = useState(null);

  return (
    <nav id="navbar">
      <ul>
        <li><Link to="/search" className={`search ${tab === 'search' ? 'active' : ''}`}><i class="fas fa-search"></i></Link></li>
        <li><Link to="/" className={tab === null || tab === 'experiences' ? 'active' : ''}>Expérience</Link></li>
        <li><Link to="/timeline" className={tab === 'timeline' ? 'active' : ''}>Chronologie</Link></li>
        <li><Link to="/skills" className={tab === 'skills' ? 'active' : ''}>Compétence</Link></li>
        <li><Link to="/freelance" className={tab === 'freelance' ? 'active' : ''}>Projets Personnels &amp; Freelance</Link></li>
        <li><Link to="/projects" className={tab === 'projects' ? 'active' : ''}>Projets Académiques</Link></li>
        <li><Link to="/training" className={tab === 'training' ? 'active' : ''}>Formation</Link></li>
        <li><Link to="/infos" className={tab === 'infos' ? 'active' : ''}>Infos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
