import React from 'react';
import SearchInput from './SearchInput'

export const Search = () => {
  return (
    <div className="container-column justify-content-center align-items-center">
      <SearchInput />
      <div id="searchResult">

      </div>
    </div>
  );
}

export default Search;
