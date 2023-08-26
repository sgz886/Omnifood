import { test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import RegularNavBar from './RegularNavBar';

test('render navbar', () => {
  const text = 'How it works';
  const { getByText } = render(<RegularNavBar />);
  const navElement = getByText(text);
  // expect(imgElement.getAttribute('src')).toBe(logo);
  expect(navElement).toBeInTheDocument();
});
