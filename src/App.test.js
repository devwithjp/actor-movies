import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios');

describe('ActorMovieList App Component', () => {
  it('renders the component without errors', () => {
    render(<App />);
  });
});