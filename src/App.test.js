import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Event Handling Demo heading and initial count', () => {
  render(<App />);
  const headingElement = screen.getByText(/Event Handling Demo/i);
  expect(headingElement).toBeInTheDocument();

  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Increase Count/i });
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
});
