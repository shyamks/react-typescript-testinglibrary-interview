import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test/test-utils';
import About from './About';

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
  const { getByText } = render(<About />);
  expect(getByText('About Page')).toBeTruthy();
});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.
  const { getByText } = render(<About />);
  userEvent.click(getByText('Increment'))
  expect(getByText('Current Count: 1')).toBeTruthy()
});
