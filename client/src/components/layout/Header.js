import React, { useEffect, useContext } from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderInfo from './HeaderInfo';
import HeaderRating from './HeaderRating';
import Navbar from './Navbar';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

const Header = () => {
  const profileContext = useContext(ProfileContext);
  const { profile, getProfile, isLoading } = profileContext;

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, []);

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
      </div>
      <Navbar />
    </>
  );
}

export default Header;
