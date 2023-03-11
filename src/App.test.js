import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('When user is in index route(/) then render home page', () => {
  window.history.pushState({}, '', '/');

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  screen.getAllByAltText('Coffee shop');
});
