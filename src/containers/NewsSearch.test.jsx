import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch container', () => {
  it('renders article titles when a search term is entered', () => {
    render(<NewsSearch />);

  });
});
