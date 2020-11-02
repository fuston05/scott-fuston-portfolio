// Modal component tests
import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// components
import {ModalContainer} from './VidModalContainer';

describe('Modal Component', () => {
  test('Renders in the DOM', () => {
    const { getByTestId } = render(
      <ModalContainer />
    )
    const modal = getByTestId(/modalCont/i);
    expect(modal).toBeInTheDocument();
  });


});