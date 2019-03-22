import React from 'react';

// Creating AddToCartContext as it might be used at any deep level child.
export const AddToCartContext = React.createContext({action: null});
