import React from 'react';

const SearchForm = ({ value = "", onSearch = f => f }) => {
  return (
    <input value={value} onChange={e => onSearch(e.target.value)} />
  );
};

export default SearchForm;