import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import ProfileContext from '../../context/profile/profileContext';

export const Footer = () => {
  const profileContext = useContext(ProfileContext);
  const { language, toggleLanguage } = profileContext;

  const [newLanguage, setNewLanguage] = useState(false);

  return (
    <div id="main-footer">
      <a href="mailto:riad.ennaim@gmail.com">
        { language === 'eng' ? 'Send me a mail for a new collaboration !' : 'Envoyez-moi un mail pour une nouvelle collaboration !' }
      </a>

      <p>
        { language === 'eng' ? 'Sourced on ' : 'Source sur ' }
        <a href="https://github.com/Riad-ENNAIM/cv">GitHub</a>
      </p>

      <p className="footer-copyright">
        &copy; 
        <Link to="/"> Riad ENNAIM </Link> 
        {new Date().getFullYear()}
      </p>

      {
        newLanguage ?
          <span
            className="footer-lang"
            onClick={() => toggleLanguage()}
            onMouseOut={() => setNewLanguage(!newLanguage)}
            title={ language === 'eng' ? 'Passer au Français' : 'Switch to English' }
          >
            <i className="fas fa-globe-africa"></i>
            { language === 'eng' ? ' Français' : ' English' }
          </span>
        :
          <span className="footer-lang" onMouseOver={() => setNewLanguage(!newLanguage)}>
            <i className="fas fa-globe-africa"></i>
            { language === 'eng' ? ' English' : ' Français' }
          </span>
      }
    </div>
  );
}

export default Footer;
