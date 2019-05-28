import React from 'react';
import ReactDOM from 'react-dom';
import AddToCart from '../AddToCart';

it('has a button', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddToCart />, div);
  expect(div.innerHTML).toContain('<button');
  ReactDOM.unmountComponentAtNode(div);
});
