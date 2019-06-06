import React from 'react';
import { mount } from 'enzyme';
import cloneDeep from 'lodash/cloneDeep';

import RootStoreProvider from '../RootStoreProvider'
import CartList from '../components/containers/CartList';
import { cartMock } from '../lib/mocks';
import { countCart } from '../lib/cartLib';

let wrapper;
let cartMockClone;

beforeEach(() => {
  cartMockClone = cloneDeep(cartMock);
  wrapper = mount(
    <RootStoreProvider initialState={{cart: cartMockClone}} env="test">
      <CartList />
    </RootStoreProvider>
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe('the cart form', () => {
  it('can update cart items', () => {
    wrapper.find('input').first().simulate('change', {target: {value: (cartMockClone[0].quantity + 1)}});
    wrapper.find('form#cart-form').simulate('submit');
    //wrapper.update();
    expect(wrapper.find('.container .my-cart').text())
      .toContain(countCart(cartMock).cartItemCount + 1);
  });

  it('can remove cart items', () => {
    
  });
});
