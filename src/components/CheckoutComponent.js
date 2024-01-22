import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS 
import { selectedItemsStorage } from './RestaurantSubMenuComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLeftLong, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const CheckoutComponent = () => {
    const body = {
      width: "500px",
      borderRadius: "6%",
      height: "100vh",
      fontWeight: "bold",
      overflow: "auto",
    };
  
    return (
      <div className="container shadow-lg" style={{ width: "fit-content", overflow: "auto" }}>
        <div style={body}>
          {selectedItemsStorage.map((item, index) => (
            <div key={index}>
              <h2 className="d-flex justify-content-evenly text-center bg-white rounded-3 p-1 my-2 w-100">
                <FontAwesomeIcon icon={faLeftLong} /> Checkout <FontAwesomeIcon icon={faMagnifyingGlass} />
              </h2>
              {/* Render other content based on the current item */}
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CheckoutComponent;