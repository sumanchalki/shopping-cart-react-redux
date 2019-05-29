import React from 'react';
import { shallow } from 'enzyme';
import CartItem from '../CartItem';
import CartUpdateForm from '../CartUpdateForm';
import { productMock } from '../../../lib/mocks';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CartItem product={productMock} />);
});

it('displays the item title', () => {
  expect(wrapper.contains(productMock.Title)).toEqual(true);
});

it('displays the item price', () => {
  expect(wrapper.contains(productMock.Price)).toEqual(true);
});

it('displays the cart update form', () => {
  expect(wrapper.find(CartUpdateForm).length).toEqual(1);
});
