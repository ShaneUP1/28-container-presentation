import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ onSubmit, handleChange }) => {
  <form onSubmit={onSubmit}>
    <input type="text" />
    <input type="submit" value="Search" />
  </form>;

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={handleChange}/>
      <input type="submit" value="Search" />
    </form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchBox;

