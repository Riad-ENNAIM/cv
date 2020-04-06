import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li><Link to="/search" class="search"><i class="fas fa-search"></i></Link></li>
        <li><Link class="active" to="/">Expérience</Link></li>
        <li><Link to="/timeline">Chronologie</Link></li>
        <li><Link to="/skills">Compétence</Link></li>
        <li><Link to="/freelance">Projets Personnels &amp; Freelance</Link></li>
        <li><Link to="/projects">Projets Académiques</Link></li>
        <li><Link to="/training">Formation</Link></li>
        <li><Link to="/infos">Infos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
