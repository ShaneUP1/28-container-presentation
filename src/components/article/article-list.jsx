import React from 'react';
import PropTypes from 'prop-types';
import Article from './single-article';

const ArticleList = ({ articles }) => {
  const articleInfo = articles.map(article => (
    <li key={article.publishedAt}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul>
      {articleInfo}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired
  })).isRequired
};

export default ArticleList;
