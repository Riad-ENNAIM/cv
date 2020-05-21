import React, { useEffect, useContext } from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderInfo from './HeaderInfo';
import HeaderRating from './HeaderRating';
import Navbar from './Navbar';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

const Header = () => {
  const profileContext = useContext(ProfileContext);
  const { profile, isLoading, language, getProfile } = profileContext;

  useEffect(() => {
    getProfile();
    if(language) document.title = `Riad ENNAIM | ${language.toUpperCase()}`
    // eslint-disable-next-line
  }, [language]);

  if(profile === null || isLoading){
    return (
      <div style={{alignSelf: 'center'}}>
        <Loader />
      </div>
    );
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
