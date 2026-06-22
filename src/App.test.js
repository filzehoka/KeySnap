// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KeySnap title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KeySnap/i);
    expect(titleElement).toBeInTheDocument();
});
