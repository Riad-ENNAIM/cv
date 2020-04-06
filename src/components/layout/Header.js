import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderInfo from './HeaderInfo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <div id="main-header">
        <HeaderTitle />
        <HeaderInfo />
      </div>
      <Navbar />
    </>
  );
}

export default Header;
