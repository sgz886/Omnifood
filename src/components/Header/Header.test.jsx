import { test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
//  import logo from '../../assets/img/omnifood-logo.png';

test('render logo image', () => {
  const altText = 'logo';
  const { getByAltText } = render(<BrowserRouter><Header /></BrowserRouter>);
  const imgElement = getByAltText(altText);
  // expect(imgElement.getAttribute('src')).toBe(logo);
  expect(imgElement).toBeInTheDocument();
});
