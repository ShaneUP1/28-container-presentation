import React from 'react';
import PropTypes from 'prop-types';

const searchBox = ({ onChange }) => {
  <input
    type="text"
    onChange={onChange}
  />;
};

searchBox.propTypes = {
  onChange: PropTypes.func.isRequired
};


