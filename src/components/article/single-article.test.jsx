import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './single-article';

describe('single-article component', () => {
  afterEach(() => cleanup());
  it('renders a single article', () => {
    const { asFragment } = render(<Article
      title="Your Title Here"
      author="Jack Handy"
      description="some deep thoughts by Jack Handy"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
