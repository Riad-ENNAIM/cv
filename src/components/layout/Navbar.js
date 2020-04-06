import React from 'react';

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li><a href="#search" class="search"><i class="fas fa-search"></i></a></li>
        <li><a class="active" href="#experience">Expérience</a></li>
        <li><a href="#timeline">Chronologie</a></li>
        <li><a href="#skill">Compétence</a></li>
        <li><a href="#freelance">Projets Personnels &amp; Freelance</a></li>
        <li><a href="#projects">Projets Académiques</a></li>
        <li><a href="#training">Formation</a></li>
        <li><a href="#infos">Infos</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
