import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.png';

import ProfileContext from '../../context/profile/profileContext';

export const Footer = () => {
  const profileContext = useContext(ProfileContext);
  const { language, toggleLanguage } = profileContext;

  const history = useHistory();

  const [newLanguage, setNewLanguage] = useState(false)

  return (
    <>
      <p id="wisdom">
        Don't try to be PERFECT .. <span>Just do your BEST.</span>
      </p>

      <div id="main-footer">
        <img src={logo} className="footer-logo" onClick={() => history.push("/")} alt="Riad ENNAIM" />

        <p className="footer-copyright">
          Copyright &copy; {new Date().getFullYear()}, 
          <Link to="/" className="owner">Riad ENNAIM</Link>
          <span>, All Rights Reserved</span>
        </p>

        {
          newLanguage ?
            <div
              className="footer-lang"
              onClick={() => toggleLanguage()}
              onMouseOut={() => setNewLanguage(!newLanguage)}
            >
              <i className="fas fa-globe-africa"></i>
              { language === 'eng' ? ' Français' : ' English' }
            </div>
          :
            <div className="footer-lang" onMouseOver={() => setNewLanguage(!newLanguage)}>
              <i className="fas fa-globe-africa"></i>
              { language === 'eng' ? ' English' : ' Français' }
            </div>
        }
      </div>
    </>
  );
}

export default Footer;
