import React, { useContext, useEffect } from 'react';

import ProfileContext from '../../context/profile/profileContext';

const SearchInput = () => {
  const profileContext = useContext(ProfileContext);
  const { searchInProfile } = profileContext;

  useEffect(() => {
    return () => searchInProfile(null);
    // eslint-disable-next-line
  }, [])

  return (
    <input 
      id="searchInput"
      placeholder="Cherchez par technologie, école, entreprise, ..."
      onChange={e => searchInProfile(e.target.value)}
    />
  );
}

export default SearchInput;
