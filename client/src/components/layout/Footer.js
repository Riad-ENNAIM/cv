import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.png'

export const Footer = () => {
  const history = useHistory();

  return (
    <>
      <p id="wisdom">
        Don't try to be PERFECT .. <span>Just do your BEST.</span>
      </p>

      <div id="main-footer">
        <img src={logo} className="footer-logo" onClick={() => history.push("/")} />
        <p className="footer-copyright">Copyright &copy; 2020, <Link to="/" className="owner">Riad ENNAIM</Link>, All Rights Reserved</p>
        <span className="footer-lang"><i className="fas fa-globe-africa"></i> Français</span>
      </div>
    </>
  );
}

export default Footer;
