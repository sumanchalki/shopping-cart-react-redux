import React from 'react';
import { mount } from 'enzyme';
import CartList from '../CartList';
import { cartMock } from '../../../lib/mocks';
import { countCart } from '../../../lib/cartLib';

let wrapper;

beforeEach(() => {
  wrapper = mount(<CartList cartDetails={{cart: cartMock, cartCount: countCart(cartMock)}} />);
});

afterEach(() => {
  wrapper.unmount();
});

it('has multiple CartItem components.', () => {
  
});

describe('the cart form', () => {
  it('displays the cart update form', () => {
    
  });

  it('can update cart items', () => {
    
  });

  it('can remove cart items', () => {
    
  });
});
