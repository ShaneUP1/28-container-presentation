/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './article-list';

describe('article-list component', () => {
  afterEach(() => cleanup());
  it('renders a list of articles', () => {
    const { asFragment } = render(<ArticleList
      articles={[{ 'title':'Your Title Here', 'author':'Jack Handy', 'description': 'some deep thoughts by Jack Handy' }]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
