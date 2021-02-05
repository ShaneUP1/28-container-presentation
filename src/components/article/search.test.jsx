import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchBox from './search';

describe('search component', () => {
  afterEach(() => cleanup());
  it('submits search terms', () => {
    const { asFragment } = render(<SearchBox
      onSubmit={jest.fn()} handleChange={jest.fn()}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
