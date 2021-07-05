import React from 'react';
import { render } from '../../test/test-utils';
import LayoutContainer from './LayoutContainer';
import { waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  const { history, getByText } = render(
    <LayoutContainer />
  );
  expect(getByText('Welcome!')).toBeTruthy();
  userEvent.click(getByText('Go to about'));
  await waitFor(() => {
    expect(history.location.pathname).toEqual('/about')
  });
});
