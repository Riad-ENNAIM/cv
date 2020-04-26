import React from 'react';

export const Footer = () => {
  return (
    <>
      <p id="wisdom">
        Don't try to be PERFECT .. <span>Just do your BEST.</span>
      </p>

      <div id="main-footer">
        <span className="footer-logo">Mon CV</span>
        <p className="footer-copyright">Copyright &copy; 2020, <a href="https://www.linkedin.com/in/riad-ennaim" target="_blank" rel="noopener noreferrer" className="owner">Riad ENNAIM</a>, All Rights Reserved</p>
        <span className="footer-lang"><i className="fas fa-globe-africa"></i> Français</span>
      </div>
    </>
  );
}

export default Footer;
