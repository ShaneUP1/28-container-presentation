import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title }) => (
  <div>
    <h2>{title}</h2>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired
};

export default Article;
