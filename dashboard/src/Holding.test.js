import { render } from '@testing-library/react';
import Holdings from './src/components/Holding';
import React from 'react';

test('renders Holdings without crashing', () => {
  render(<Holdings />);
});
