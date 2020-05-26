import React, { useEffect, useContext } from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderInfo from './HeaderInfo';
import HeaderRating from './HeaderRating';
import Navbar from './Navbar';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

const Header = () => {
  const profileContext = useContext(ProfileContext);
  const { profile, isDarkMode, language, isLoading, getProfile } = profileContext;

  useEffect(() => {
    getProfile();
    if(language) document.title = `Riad ENNAIM | ${language.toUpperCase()}`;
    if(isDarkMode) {
      document.documentElement.style.setProperty('--background-color', '#222222');
      document.documentElement.style.setProperty('--primary-color', '#5D6D7E');
      document.documentElement.style.setProperty('--dark-color', '#FFFFFF');
      document.documentElement.style.setProperty('--light-color-degree1', '#555555');
      document.documentElement.style.setProperty('--light-color-degree2', '#333333');
    } else {
      document.documentElement.removeAttribute('style');
    }
    // eslint-disable-next-line
  }, [isDarkMode, language]);

  if(profile === null || isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div id="main-header">
        <HeaderTitle profile={profile} />
        <HeaderInfo profile={profile} />
        <HeaderRating />

        <div className="show-more">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Header;
