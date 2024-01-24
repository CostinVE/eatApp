import React, { useState } from "react";
import RestaurantData from "../assets/mock";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faMagnifyingGlass, faCartShopping, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const body = {
  width: "500px",
  borderRadius: "6%",
  height: "100vh",
  fontWeight: "bold",
  overflow: "auto",
};

let selectedItemsStorage = [];

const MenuComponent = ({ menu }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemCounters, setItemCounters] = useState({});

  const handleCheckboxChange = (item) => {
    const updatedSelectedItems = [...selectedItems];

    // Toggle the selection state of the item
    if (updatedSelectedItems.includes(item)) {
      updatedSelectedItems.splice(updatedSelectedItems.indexOf(item), 1);
    } else {
      updatedSelectedItems.push(item);
    }

    selectedItemsStorage = updatedSelectedItems;
    console.log(selectedItemsStorage);

    setSelectedItems(updatedSelectedItems);
    console.log(`Selected Items: ${updatedSelectedItems.join(', ')}`);
  };

  const incrementCounter = (item) => {
    // Increment the counter for the selected item
    setItemCounters((prevCounters) => ({
      ...prevCounters,
      [item]: (prevCounters[item] || 0) + 1,
    }));
    
    console.log(`Counter for ${item}: ${itemCounters[item] || 0}`);
  };

  const decrementCounter = (item) => {
    // Increment the counter for the selected item
    setItemCounters((prevCounters) => ({
      ...prevCounters,
      [item]: (prevCounters[item] || 0) - 1,
    }));

    console.log(`Counter for ${item}: ${itemCounters[item] || 0}`);
  };

  const updateLabelStyle = (item) => {
    return {
      backgroundColor: selectedItems.includes(item) ? '#f0d01f' : 'white',
    };
  };

  return (
    <div>
      <h2 className="d-flex justify-content-evenly text-center bg-white rounded-3 p-1 my-2 w-100">
        {menu.title}
      </h2>
      <div className="container d-flex flex-column my-4" style={{ marginBottom: 0 }}>
        {menu.items?.map((item, index) => (
          <div key={index} className="container d-flex flex-column my-2">
            <input
              style={{ display: "none" }}
              type="checkbox"
              id={`checkbox-${index}`}
              className="form-check-input"
              value={item}
              checked={selectedItems.includes(item)}
              onChange={() => handleCheckboxChange(item)}
            />
            <label htmlFor={`checkbox-${index}`} className="form-check-label fs-4 shadow p-4 w-100 rounded-3" style={updateLabelStyle(item)}>
              {item}
              
            </label>
            
          </div>
        ))}
      </div>
    </div>
  );
};


const RestaurantSubMenu = ({ submenuIndex }) => {
  const submenu = RestaurantData[0]?.menu[submenuIndex];
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleAddToCart = () => {
    // Do any necessary processing with selectedItemsStorage
    console.log("Selected Items:", selectedItemsStorage);

    // Now, navigate to the "/checkout" route
    navigate("/checkout");
  };

  return (
    <div className="container d-flex justify-content-center flex-column shadow-lg" style={{ width: "fit-content", overflow: "auto" }}>
      <div style={body}>
        {submenu && <MenuComponent key={submenu.id} menu={submenu} />}
      </div>
      <Button variant="dark" className="shadow-sm p-3 my-3 fw-bold rounded-5 border-0" onClick={handleAddToCart}> Add to Cart &nbsp;&nbsp; <FontAwesomeIcon icon={faCartShopping} bounce size="lg" /> </Button>
    </div>
  );
};



export { selectedItemsStorage }
export { RestaurantSubMenu }
