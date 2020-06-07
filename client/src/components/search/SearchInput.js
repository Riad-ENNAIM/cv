import React, { useContext, useEffect, useRef } from 'react';

import ProfileContext from '../../context/profile/profileContext';

const SearchInput = () => {
  const profileContext = useContext(ProfileContext);
  const { searchInProfile, language } = profileContext;

  const text = useRef('');

  useEffect(() => {
    searchInProfile(text.current.value);
    return () => searchInProfile(null);
  }, [language]);

  return (
    <input 
      id="searchInput"
      placeholder={language === 'en' ? 'Search by technology, school, company, ...' : 'Cherchez par technologie, école, entreprise, ...'}
      ref={text}
      onChange={e => searchInProfile(e.target.value)}
    />
  );
}

export default SearchInput;
