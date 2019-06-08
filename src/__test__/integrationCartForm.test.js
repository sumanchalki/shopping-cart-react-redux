import React from 'react';
import { mount } from 'enzyme';
import cloneDeep from 'lodash/cloneDeep';

import RootStoreProvider from '../RootStoreProvider'
import CartList from '../components/containers/CartList';
import { cartStub } from '../lib/stubs';
import { countCart } from '../lib/cartLib';

let wrapper;
let cartStubClone;

beforeEach(() => {
  cartStubClone = cloneDeep(cartStub);
  wrapper = mount(
    <RootStoreProvider initialState={{cart: cartStubClone}} env="test">
      <CartList />
    </RootStoreProvider>
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe('the cart form', () => {
  it('can update cart items - increase quantity', () => {
    // Increase the first item quantity by 1.
    wrapper.find('input').first().simulate('change',
      {
        target:
        {
          value: (cartStubClone[0].quantity + 1)
        }
      }
    );
    // Submit cart form.
    wrapper.find('form#cart-form').simulate('submit');
    //wrapper.update();
    expect(wrapper.find('.container .my-cart').text())
      .toContain(countCart(cartStub).cartItemCount + 1);
  });

  it('can update cart items - decrease quantity', () => {
    // Decrease the second item quantity by 2.
    wrapper.find('input').at(1).simulate('change',
      {
        target:
        {
          value: (cartStubClone[1].quantity - 2)
        }
      }
    );
    // Submit cart form.
    wrapper.find('form#cart-form').simulate('submit');
    expect(wrapper.find('.container .my-cart').text())
      .toContain(countCart(cartStub).cartItemCount - 2);
  });

  it('can remove cart items', () => {
    // Click on the remove from cart button.
    wrapper.find('.btn-remove-cart').first().simulate('click');
    // jsdom does not parse noscript tag properly. To avoid error following code is added.
    // Otherwise when we simulate click on confirm button it will throw error
    // from 'react-confirm-alert' as the required noscript tag is not available.
    if (document.querySelectorAll('noscript.react-confirm-alert-blur').length === 0) {
      const noscript = document.createElement('noscript');
      noscript.classList.add('react-confirm-alert-blur');
      document.body.appendChild(noscript);
    }
    // Click on the confirm screen button.
    document.querySelector('#btn-confirm-delete-cart').click();

    // Verify.
    delete cartStubClone[0];
    expect(wrapper.find('.container .my-cart').text())
      .toContain(countCart(cartStubClone).cartItemCount);
  });
});
