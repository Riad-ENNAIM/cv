import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderInfo from './HeaderInfo';
import HeaderRating from './HeaderRating';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <div id="main-header">
        <HeaderTitle />
        <HeaderInfo />
        <HeaderRating />
      </div>
      <Navbar />
    </>
  );
}

export default Header;
