import React from 'react';

export const Footer = () => {
  return (
    <>
      <p id="wisdom">
        Don't try to be PERFECT .. <span>Just do your BEST.</span>
      </p>

      <div id="main-footer">
        <span class="footer-logo">Mon CV</span>
        <p class="footer-copyright">Copyright &copy; 2020, <a href="https://www.linkedin.com/in/riad-ennaim" target="_blank" rel="noopener noreferrer" className="owner">Riad ENNAIM</a>, All Rights Reserved</p>
        <span class="footer-lang"><i class="fas fa-globe-africa"></i> Français</span>
      </div>
    </>
  );
}

export default Footer;
