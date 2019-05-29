import React from 'react';
import { shallow } from 'enzyme';
import ProductDetailSummary from '../ProductDetailSummary';
import { productMock } from '../../../lib/mocks';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ProductDetailSummary product={productMock} />);
});

it('displays the item title', () => {
  expect(wrapper.contains(productMock.Title)).toEqual(true);
});

it('displays the item image', () => {
  expect(wrapper.find('img').getElement().props.src).toEqual(productMock.ImageUrl);
});

it('displays the item category', () => {
  expect(wrapper.contains(productMock.Category)).toEqual(true);
});

it('displays the item manufacturer', () => {
  expect(wrapper.contains(productMock.Manufacturer)).toEqual(true);
});

it('displays the item organic info', () => {
  expect(wrapper.contains((productMock.Organic ? 'Yes' : 'No'))).toEqual(true);
});

it('displays the item price', () => {
  expect(wrapper.contains(productMock.Price)).toEqual(true);
});
