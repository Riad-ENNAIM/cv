import React from 'react';
import Search from '../search/Search'
import SearchInput from '../search/SearchInput';

const SearchPage = () => {
  return (
    <div className="container-column">
      <SearchInput />
      <Search />
    </div>
  );
}

export default SearchPage;
