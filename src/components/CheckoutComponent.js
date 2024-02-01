// CheckoutComponent.js
import React, { useState } from 'react';
import CheckoutItem from './CheckoutItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { selectedItemsStorage } from './RestaurantSubMenuComponent';
import './style.css'

let DeliveryFee = 10;
let ServicesFee = 5;

const CheckoutComponent = () => {
  const navigate = useNavigate();

  const body = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '500px',
    borderRadius: '6%',
    height: '100vh',
    fontWeight: 'bold',
    overflow: 'auto',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
  };

  const [countStates, setCountStates] = useState(selectedItemsStorage.map(() => 0));
  const [itemCount, setItemCount] = useState(selectedItemsStorage.length);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleConfirmOrder = () => {
    // Navigate to the delivery route
    navigate('/delivery');
  };

  const updateTotalItemCount = (newCount, index) => {
    setCountStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = newCount;
      return newStates;
    });
  };

  const calculateTotalItemCount = () => {
    return countStates.reduce((total, count) => total + count, itemCount);
  };

  const calculateTotalItemsPrice = () => {
    return selectedItemsStorage.reduce((total, item, index) => {
      const price = parseInt(item.details.price);
      const count = countStates[index];
      const totalPrice = price * (count + 1);
      return total + totalPrice;
    }, 0);
  };

  const totalOrderPrice = () => {
    return calculateTotalItemsPrice() + DeliveryFee + ServicesFee;
  };

  return (
    <div className='container' style={{ width: 'fit-content',}}>
      <div className='scroll' style={body}>
        <section className='container sticky-top bg-white shadow d-flex flex-column rounded-3 p-2 my-3'>
          <h2 className='d-flex text-center bg-white rounded-3 p-1 my-2 w-100'>
            <FontAwesomeIcon icon={faLeftLong} style={{ marginRight: '4em' }} onClick={handleGoBack} /> Checkout
          </h2>
        </section>
        <section className='container d-flex flex-column my-3'>
          <h4 className='fw-bold my-0'>Your order</h4>
          <p className='fw-semibold my-0'>
            {calculateTotalItemCount()} products from <span className='fw-bold'>Restaurant</span>
          </p>
          <p className='text-secondary fw-medium'>Address</p>
        </section>
        <div>
          {selectedItemsStorage.map((item, index) => (
            <CheckoutItem key={item.id} item={item} index={index} updateTotalItemCount={updateTotalItemCount} />
          ))}
        </div>
        <button type='btn' className='btn btn-danger shadow fw-semibold rounded-5 w-50 my-3'>
          Cancel ?
        </button>
        <section className='container-fluid bg-dark-subtle d-flex flex-column h-50'>
          <h3 className='fw-bold my-3'>Summary</h3>
          <div className='container row row-cols-2'>
            <div className='col-10'>
              <p className='fw-medium'>Prodcuts</p>
              <p className='fw-medium'>Delivery</p>
              <p className='fw-medium'>Services</p>
              <h3 className='fw-bold my-3'>TOTAL</h3>
            </div>
            <div className='col-2'>
              <p className='fw-bold fs-5 text-secondary'>${calculateTotalItemsPrice()}</p>
              <p className='fw-bold fs-5 text-secondary'>${DeliveryFee}</p>
              <p className='fw-bold fs-5 text-secondary'>${ServicesFee}</p>
              <h3 className='fw-bold text-success'>${totalOrderPrice()}</h3>
            </div>
          </div>
          <button
            type='btn'
            className='btn btn-success fw-semibold shadow-lg rounded-5 w-75 p-2 align-self-center sticky-bottom'
          style={{marginTop: "30%"}} onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </section>
      </div>
    </div>
  );
};

export default CheckoutComponent;

