import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

// components
import NavMain from '../components/Common/Header/NavMain';
import App from '../App';

describe('<NavMain />', () => {

  test('should render without craching', () => {
    const { getByTestId } = render(
      <NavMain />
    );
    expect(getByTestId('navMainCont')).toBeInTheDocument();
  });

  test('should contain nav links', () => {
    const {getByTestId } = render(
      <App />
    );
    // nav links
    expect(getByTestId('portfolioLink')).toBeInTheDocument();
    expect(getByTestId('aboutLink')).toBeInTheDocument();
    expect(getByTestId('skillsLink')).toBeInTheDocument();
    expect(getByTestId('contactLink')).toBeInTheDocument();
  });
  
});