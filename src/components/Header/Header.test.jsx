import { test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import logo from '../../assets/img/omnifood-logo.png';

test('render logo image', () => {
  const altText = 'logo';
  const { getByAltText, container } = render(<BrowserRouter><Header /></BrowserRouter>);
  const imgElement = getByAltText(altText);
  expect(imgElement.getAttribute('src')).toBe(logo);
  const header = container.querySelector('header');
  expect(header).toBeInTheDocument();
  const navs = container.querySelectorAll('nav');
  expect(navs.length).toEqual(2);
});

test('click Menu', () => {
  const { getAllByRole } = render(<BrowserRouter><Header /></BrowserRouter>);
  const navbarMeal = getAllByRole('link', { name: 'Meals' });
  navbarMeal.map((item) => expect(item.getAttribute('href')).toBe('#meals'));
  // fireEvent.click(navbarMeal);
});
