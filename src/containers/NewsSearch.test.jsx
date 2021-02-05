import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
global.fetch = require('node-fetch');
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import NewsSearch from './NewsSearch';

const server = setupServer(
  rest.get('https://newsapi.org/v2/everything', (req, res, ctx) => {
    return res(
      ctx.json({
        articles: [
          {
            title: 'my article',
            author: 'Jon Doe',
            description: 'Dear Jon letters.'
          }
        ]
      })
    );
  }),

  rest.get('https://newsapi.org/v2/everything', (req, res, ctx) => {
    return res(
      ctx.json({
        articles: [
          {
            title: 'my article',
            author: 'Jon Doe',
            description: 'Dear Jon letters.'
          }
        ]
      })
    );
  })
);


describe('NewsSearch container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('searches for articles when a search term is entered', () => {
    render(<NewsSearch />);

    const searchInput = screen.getByPlaceholderText('What do you want to know?');
    fireEvent.change(searchInput, {
      target: {
        value: 'tesla'
      }
    });

    return waitFor(() => {
      expect(screen.getByTestId('articles')).toHaveTextContent('');
    });
  });
});
