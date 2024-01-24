import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS 
import { selectedItemsStorage } from './RestaurantSubMenuComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLeftLong, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

const CheckoutComponent = () => {
  const body = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width:"500px",
    borderRadius:"6%", 
    height:"100vh",
    fontWeight: "bold",
    overflow: "auto",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)"
}
const [itemCounters, setItemCounters] = useState({});

  const incrementCounter = (item) => {
    // Increment the counter for the selected item
    setItemCounters((prevCounters) => ({
      ...prevCounters,
      [item]: (prevCounters[item] || 0) + 1,
    }));
  };

  const decrementCounter = (item) => {
    // Decrement the counter for the selected item
    setItemCounters((prevCounters) => ({
      ...prevCounters,
      [item]: (prevCounters[item] || 0) - 1,
    }));
  };

    return (
      <div className='container' style={{width: "fit-content", overflow: "auto"}}>
      <div style={body}>
      <section className='container sticky-top bg-white shadow d-flex flex-column rounded-3 p-2 my-3'>
        <h2 className="d-flex text-center bg-white rounded-3 p-1 my-2 w-100">
                <FontAwesomeIcon icon={faLeftLong} /> &nbsp;&nbsp;&nbsp; Checkout
              </h2>
              </section>
              <section className='container d-flex flex-column my-3'>
                <h4 className='fw-bold my-0'>Your order</h4>
                <p className='fw-semibold my-0'>x products from <span className='fw-bold'>Restaurant</span></p>
                    <p className='text-secondary fw-medium'>Address</p>
              </section>
        <div>
          {selectedItemsStorage.map((item, index) => (
            <div className='container d-flex flex-column my-4 flex-wrap  'key={index}>
              {/* Render other content based on the current item */}
              <div className='d-flex justify-content-evenly shadow rounded-3 fw-bold p-3' style={{width: "500px"}}> <button onClick={() => decrementCounter(item)} type='btn' className='btn btn-outline-danger rounded-circle border-0'><FontAwesomeIcon icon={faMinus} /></button> <p>{itemCounters[item] || 0}</p> {item}  <p>price</p> <button onClick={() => incrementCounter(item)} type='btn' className='btn btn-outline-success rounded-circle border-0'><FontAwesomeIcon icon={faPlus} /></button> </div>
            </div>
            
          ))}</div>
        <button type='btn' className=' btn btn-danger shadow fw-semibold rounded-5 w-50 my-3'>Cancel ?</button>
         <section className='container-fluid bg-dark-subtle d-flex flex-column'>
                <h3 className='fw-bold my-3'>Summary</h3>
                <div className='container row row-cols-2'>
                   <div className='col-10'>
                      <p className='fw-medium'>Prodcuts</p>
                      <p className='fw-medium'>Delivery</p>
                      <p className='fw-medium'>Services</p>
                      <h3 className='fw-bold my-3'>TOTAL</h3>
                   </div>
                   <div className='col-2'>
                   <p className='fw-medium'>price</p>
                      <p className='fw-medium'>price</p>
                      <p className='fw-medium'>price</p>
                      <h3 className='fw-bold my-3'>price</h3>
                   </div>
                </div>
                <button type='btn' className='btn btn-success fw-semibold shadow-lg rounded-5 w-75 p-2 align-self-center sticky-bottom my-3'>Confirm Order</button>
         </section>
      </div>
    </div>
    );
  };
  
  export default CheckoutComponent;