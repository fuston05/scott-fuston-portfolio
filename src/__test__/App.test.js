import React from 'react';
import {render} from '@testing-library/react';

// components
import App from '../App';

describe('App ', () => {
  test('should render without crashing', () =>{
    render(<App />)
  })
  
});