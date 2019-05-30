import React from 'react';
import { render } from 'enzyme';
import CartUpdateForm from '../CartUpdateForm';
import { productMock } from '../../../lib/mocks';

let wrapper;

beforeEach(() => {
  const cartFormElement = {quantity: 10};
  // Using static rendering is enough.
  wrapper = render(<CartUpdateForm product={productMock} cartFormElement={cartFormElement} />);
});

afterEach(() => {
  wrapper.remove();
});

it('has an input type', () => {
  expect(wrapper.find('input').length).toEqual(1);
});

it('has a button type', () => {
  expect(wrapper.find('button').length).toEqual(1);
});
