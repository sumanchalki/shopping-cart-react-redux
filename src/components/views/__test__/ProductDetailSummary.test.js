import React from 'react';
import { shallow } from 'enzyme';
import ProductDetailSummary from '../ProductDetailSummary';
import { productsStub } from '../../../lib/stubs';

let wrapper;
const productStub = productsStub.Products[0];

beforeEach(() => {
  wrapper = shallow(<ProductDetailSummary product={productStub} />);
});

afterEach(() => {
  wrapper.unmount();
});

it('displays the item title', () => {
  expect(wrapper.contains(productStub.Title)).toEqual(true);
});

it('displays the item image', () => {
  expect(wrapper.find('img').getElement().props.src).toEqual(productStub.ImageUrl);
});

it('displays the item category', () => {
  expect(wrapper.contains(productStub.Category)).toEqual(true);
});

it('displays the item manufacturer', () => {
  expect(wrapper.contains(productStub.Manufacturer)).toEqual(true);
});

it('displays the item organic info', () => {
  expect(wrapper.contains((productStub.Organic ? 'Yes' : 'No'))).toEqual(true);
});

it('displays the item price', () => {
  expect(wrapper.contains(productStub.Price)).toEqual(true);
});
