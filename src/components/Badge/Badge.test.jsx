import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Badge from './index';

describe('Badge', () => {
  test('renders with default props', () => {
    render(<Badge text="Test Badge" />);

    const badge = screen.getByText('Test Badge');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-orange-900');
  });

  test('renders with custom color prop', () => {
    render(<Badge text="Test Badge" color="blue-500" />);

    const badge = screen.getByText('Test Badge');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-blue-500');
  });

  test('changes color on radio button click', () => {
    render(<Badge text="Test Badge" />);

    const badge = screen.getByText('Test Badge');
    const radio = screen.getByText('Test Badge');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-orange-900');

    userEvent.click(radio);

    expect(badge).toHaveClass('bg-orange-900');

    userEvent.click(radio);

    expect(badge).toHaveClass('bg-orange-900');
  });
});
