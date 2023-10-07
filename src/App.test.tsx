import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders App when clicked add car must have text 1400', () => {
  render(<App />);
  const button = screen.getByTestId('button_0_add')
  fireEvent.click(button)
  expect(1400).toBeInTheDocument()
});
