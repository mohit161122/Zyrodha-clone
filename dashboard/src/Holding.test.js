import React from 'react';
import { render } from '@testing-library/react';
import Holdings from './src/components/Holding';

// Mock chart.js so it doesn't crash on canvas
jest.mock('chart.js', () => ({
  Chart: class {
    static register() {}
    static getChart() { return null; }
    destroy() {}
    update() {}
  },
  CategoryScale: {},
  LinearScale: {},
  BarElement: {},
  Title: {},
  Tooltip: {},
  Legend: {}
}));

test('renders Holdings', () => {
  render(<Holdings />);
});
