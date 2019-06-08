import React from 'react';
import { render } from 'enzyme';
import CartUpdateForm from '../CartUpdateForm';
import { productsStub } from '../../../lib/stubs';

let wrapper;

beforeEach(() => {
  const cartFormElement = {quantity: 10};
  const productStub = productsStub.Products[0];
  // Using static rendering is enough.
  wrapper = render(<CartUpdateForm product={productStub} cartFormElement={cartFormElement} />);
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
