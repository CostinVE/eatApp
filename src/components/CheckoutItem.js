// CheckoutItem.js
import React, { useState } from 'react';

const CheckoutItem = ({ item }) => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCounter = () => {
    setCount(prevCount => Math.max(prevCount - 1, 0));
  };

  return (
    <div>
      <div>{item.name}</div>
      <div>Price: ${item.details.price}</div>
      <div>Quantity: {count}</div>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default CheckoutItem;