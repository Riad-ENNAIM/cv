import React, { useEffect, useRef } from 'react';
import Search from '../search/Search'
import SearchInput from '../search/SearchInput';

const SearchPage = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    if(pageRef.current.getBoundingClientRect().top <= 0) {
      pageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="page container-column" ref={pageRef}>
      <SearchInput />
      <Search />
    </div>
  );
}

export default SearchPage;
