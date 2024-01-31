import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const CheckoutItem = ({ item, index, updateTotalItemCount }) => {
  const [count, setCount] = useState(0); // Issue might be here
  const price = parseInt(item.details.price);

  const incrementCounter = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      updateTotalItemCount(newCount, index);
      return newCount;
    });
  };

  const decrementCounter = () => {
    setCount(prevCount => {
      const newCount = Math.max(prevCount - 1, 0);
      updateTotalItemCount(newCount, index);
      return newCount;
    });
  };

  const multiplyPrice = (value) => {
    return Math.floor(price * value);
  };

  return (
    <div className='container d-flex flex-column my-4 flex-wrap'>
      <div className='d-flex justify-content-evenly shadow rounded-3 fw-bold p-3' style={{ width: "500px" }}>
        <button onClick={decrementCounter} type='button' className='btn btn-outline-danger rounded-circle border-0'>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
        <div>{count + 1}x</div>
        <div>{item.name}</div>
        <div>${multiplyPrice(count + 1)}</div>
        <button onClick={incrementCounter} type='button' className='btn btn-outline-success rounded-circle border-0'>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
