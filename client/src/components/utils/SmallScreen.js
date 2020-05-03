import React, { useEffect, useContext } from 'react';
import HeaderTitle from '../layout/HeaderTitle';
import Loader from '../utils/Loader';

import ProfileContext from '../../context/profile/profileContext';

export default () => {
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
    <div id="smallScreen">
      <div className="small-screen-header">
        <HeaderTitle profile={profile} />
      </div>

      <div className="small-screen-body">
        <p>
          Merci d'ouvrir la page dans un écrant plus large
        </p>
      </div>
    </div>
  )
}
