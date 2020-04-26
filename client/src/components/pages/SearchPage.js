import React, { useContext, useEffect } from 'react';
import Search from '../search/Search'

import NavbarContext from '../../context/navbar/navbarContext';

const SearchPage = () => {
  const navbarContext = useContext(NavbarContext);

  useEffect(() => {
    navbarContext.setActiveTab('search');
    // eslint-disable-next-line
  }, []);

  return <Search />;
}
export default SearchPage;
