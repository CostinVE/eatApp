// CheckoutComponent.js
import React from 'react';
import CheckoutItem from './CheckoutItem';
import { selectedItemsStorage } from './RestaurantSubMenuComponent';

const CheckoutComponent = () => {
  return (
    <div>
      {selectedItemsStorage.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CheckoutComponent;
