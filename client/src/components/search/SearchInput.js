import React, { useContext, useEffect } from 'react';

import ProfileContext from '../../context/profile/profileContext';

const SearchInput = () => {
  const profileContext = useContext(ProfileContext);
  const { searchInProfile, language } = profileContext;

  useEffect(() => {
    return () => searchInProfile(null);
    // eslint-disable-next-line
  }, [language])

  return (
    <input 
      id="searchInput"
      placeholder={language === 'eng' ? 'Search by technology, school, company, ...' : 'Cherchez par technologie, école, entreprise, ...'}
      onChange={e => searchInProfile(e.target.value)}
    />
  );
}

export default SearchInput;
