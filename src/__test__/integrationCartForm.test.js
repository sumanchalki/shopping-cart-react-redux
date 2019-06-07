import React from 'react';
import ReactDOM from 'react-dom';
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
    wrapper.find('input').first().simulate('change',
      {
        target:
        {
          value: (cartMockClone[0].quantity + 1)
        }
      }
    );
    // Submit cart form.
    wrapper.find('form#cart-form').simulate('submit');
    //wrapper.update();
    expect(wrapper.find('.container .my-cart').text())
      .toContain(countCart(cartMock).cartItemCount + 1);
  });

  it('can remove cart items', () => {
    // Click on the remove from cart button.
    wrapper.find('.btn-remove-cart').first().simulate('click');
    // jsdom does not parse noscript tag properly. To avoid error following code is added.
    if (document.querySelectorAll('noscript.react-confirm-alert-blur').length === 0) {
      const noscript = document.createElement('noscript');
      noscript.classList.add('react-confirm-alert-blur');
      document.body.appendChild(noscript);
    }
    // Click on the confirm screen button.
    document.querySelector('#btn-confirm-delete-cart').click();

    // Verify.
    delete cartMockClone[0];
    expect(wrapper.find('.container .my-cart').text())
      .toContain(countCart(cartMockClone).cartItemCount);
  });
});
