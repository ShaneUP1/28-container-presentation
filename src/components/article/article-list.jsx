import React from 'react';
import PropTypes from 'prop-types';
import Article from './single-article';

const ArticleList = ({ articles }) => {
  const articleInfo = articles.map(article => (
    <li key={article.title}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul data-testid="articles">
      {articleInfo}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default ArticleList;
