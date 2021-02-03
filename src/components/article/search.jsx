import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ onChange }) => {
  <input
    type="text"
    onChange={onChange}
  />;


  return (
    <input
      type="text"
      onChange={onChange}
    />
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SearchBox;

