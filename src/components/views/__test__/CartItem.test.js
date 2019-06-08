import React from 'react';
import { shallow } from 'enzyme';
import CartItem from '../CartItem';
import CartUpdateForm from '../CartUpdateForm';
import { productsStub } from '../../../lib/stubs';

let wrapper;
const productStub = productsStub.Products[0];

beforeEach(() => {
  wrapper = shallow(<CartItem product={productStub} />);
});

afterEach(() => {
  wrapper.unmount();
});

it('displays the item title', () => {
  expect(wrapper.contains(productStub.Title)).toEqual(true);
});

it('displays the item price', () => {
  expect(wrapper.contains(productStub.Price)).toEqual(true);
});

it('displays the cart update form', () => {
  expect(wrapper.find(CartUpdateForm).length).toEqual(1);
});
