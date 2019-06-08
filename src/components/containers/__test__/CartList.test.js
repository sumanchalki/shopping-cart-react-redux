import React from 'react';
import { mount } from 'enzyme';

import RootStoreProvider from '../../../RootStoreProvider';
import CartList from '../CartList';
import CartItem from '../../views/CartItem';
import { cartStub } from '../../../lib/stubs';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <RootStoreProvider initialState={{cart: cartStub}} env="test">
      <CartList />
    </RootStoreProvider>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('displays all the CartItem components.', () => {
  expect(wrapper.find(CartItem).length).toEqual(cartStub.length);
});
