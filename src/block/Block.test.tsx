import { render, screen } from '@testing-library/react';
import Block from './Block';

test('renders block with text', () => {
  render(<Block />);
  const divElement = screen.getByText(/I am a Block/);
  expect(divElement).toBeInTheDocument();
})
