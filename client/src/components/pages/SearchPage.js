import React, { useEffect } from 'react';
import Search from '../search/Search'
import SearchInput from '../search/SearchInput';

const SearchPage = () => {
  useEffect(() => {
    const pageElement = document.getElementById('page');
    if(pageElement.getBoundingClientRect().top <= 0) {
      pageElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="container-column">
      <SearchInput />
      <Search />
    </div>
  );
}

export default SearchPage;
