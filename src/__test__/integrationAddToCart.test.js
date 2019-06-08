import React from 'react';
import { mount } from 'enzyme';
import cloneDeep from 'lodash/cloneDeep';

import RootStoreProvider from '../RootStoreProvider';
import ProductList from '../components/containers/ProductList';
import ProductDetails from '../components/containers/ProductDetails';
import { cartMock, productsMock } from '../lib/mocks';
import { countCart } from '../lib/cartLib';

let cartMockClone;
let mockFetchPromise;

beforeEach(() => {
  cartMockClone = cloneDeep(cartMock);
  mockFetchPromise = Promise.resolve({
    ok: true,
    json: () => Promise.resolve(productsMock)
  });

  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
});

afterEach(() => {
  // Clear the mock.
  global.fetch.mockClear();
});

it('can add to cart from homepage', (done) => {
  const wrapper = mount(
    <RootStoreProvider initialState={{cart: cartMockClone}} env="test">
      <ProductList />
    </RootStoreProvider>
  );

  // process.nextTick() ensures that the functions queued in the current event loop are completed,
  // thus also ensuring that the Promises and other code is done executing.
  process.nextTick(() => {
    wrapper.update();
    // Click on add to cart.
    wrapper.find('.add-cart-container button').first().simulate('click');

    expect(countCart(wrapper.props().initialState.cart).cartItemCount)
      .toEqual(countCart(cartMock).cartItemCount + 1);

    wrapper.unmount();
    done();
  });
});

it('can add to cart from product details page', (done) => {
  const wrapper = mount(
    <RootStoreProvider initialState={{cart: cartMockClone}} env="test">
      <ProductDetails productId={productsMock.Products[0].Id} />
    </RootStoreProvider>
  );

  // process.nextTick() ensures that the functions queued in the current event loop are completed,
  // thus also ensuring that the Promises and other code is done executing.
  process.nextTick(() => {
    wrapper.update();
    // Click on add to cart.
    wrapper.find('.add-cart-container button').first().simulate('click');

    expect(countCart(wrapper.props().initialState.cart).cartItemCount)
      .toEqual(countCart(cartMock).cartItemCount + 1);

    // Clear the mock.
    global.fetch.mockClear();
    wrapper.unmount();
    done();
  });
});
