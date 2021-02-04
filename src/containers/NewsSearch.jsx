import React, { Component } from 'react';
import ArticleList from '../components/article/article-list';
import SearchBox from '../components/article/search';
import { searchArticles, topArticles } from '../services/newsapi';

export default class NewsSearch extends Component {
  state = {
    articles: [],
    loading: false,
    search: ''
  }

  componentDidMount() {
    this.setState({ loading: true });
    topArticles()
      .then(articles => this.setState({ articles }));  
    
    this.setState({ loading: false });
  }
  
  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSubmit = (event) => {
    this.setState({ loading: true });
    event.preventDefault();
    
    searchArticles(this.state.search)
      .then(articles => this.setState({ articles }));
    
    this.setState({ loading: false });
  }

  render() {
    const { articles, loading } = this.state;
    return (
      <>
        <SearchBox onSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        {!loading ? <ArticleList articles={articles} />
          : <h2>LOADING....</h2>
        }
      </>
    );
  }
}
