import React from 'react';
import { mount } from 'enzyme';
import RootStoreProvider from '../RootStoreProvider'
import CartList from '../components/containers/CartList';
//import CartItem from '../../views/CartItem';
import { cartMock } from '../lib/mocks';
import { countCart } from '../lib/cartLib';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <RootStoreProvider initialState={{cart: cartMock}} env="test">
      <CartList cartDetails={{cart: cartMock, cartCount: countCart(cartMock)}} />
    </RootStoreProvider>
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe('the cart form', () => {
  it('can update cart items', () => {
    wrapper.find('input').first().simulate('change', {target: {value: (cartMock[0].quantity + 1)}});
    wrapper.find('form#cart-form').simulate('submit');
    expect(wrapper.find('.container .my-cart').text()).toContain(countCart(cartMock).cartItemCount + 1);
  });

  it('can remove cart items', () => {
    
  });
});
