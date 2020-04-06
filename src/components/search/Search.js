import React from 'react';
import SearchInput from './SearchInput'

export const Search = () => {
  return (
    <div className="container-column">
      <SearchInput />
      <div id="searchResult">

      </div>
    </div>
  );
}

export default Search;
