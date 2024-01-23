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

const MenuItem = ({ item, isSelected, handleCheckboxChange, counter, increaseCounter, decreaseCounter }) => {
  return (
    <div className="form-check my-2">
      <input
        style={{ display: "none" }}
        type="checkbox"
        id={`checkbox-${item}`}
        className="form-check-input"
        value={item}
        checked={isSelected}
        onChange={() => handleCheckboxChange(item)}
      />
      <label htmlFor={`checkbox-${item}`} className="form-check-label fs-4 shadow p-4 w-100 rounded-3" style={{ backgroundColor: isSelected ? '#f0d01f' : 'white' }}>
        {item}
      </label>
      <div className="d-flex align-items-center">
        <Button variant="success" className="mx-2" onClick={() => decreaseCounter(item)}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <span>{counter}</span>
        <Button variant="success" className="mx-2" onClick={() => increaseCounter(item)}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </div>
  );
};

const MenuComponent = ({ menu }) => {
  const [selectedItems, setSelectedItems] = useState({});
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleCheckboxChange = (item) => {
    const updatedSelectedItems = { ...selectedItems };

    // Toggle the selection state of the item
    if (updatedSelectedItems[item]) {
      delete updatedSelectedItems[item];
    } else {
      updatedSelectedItems[item] = 1;
    }

    selectedItemsStorage = Object.keys(updatedSelectedItems);
    console.log(selectedItemsStorage);

    setSelectedItems(updatedSelectedItems);
    console.log(`Selected Items: ${Object.keys(updatedSelectedItems).join(', ')}`);
  };

  const increaseCounter = (item) => {
    const updatedSelectedItems = { ...selectedItems };
    updatedSelectedItems[item] = (updatedSelectedItems[item] || 0) + 1;

    setSelectedItems(updatedSelectedItems);
  };

  const decreaseCounter = (item) => {
    const updatedSelectedItems = { ...selectedItems };
    if (updatedSelectedItems[item] > 0) {
      updatedSelectedItems[item] -= 1;
    }

    setSelectedItems(updatedSelectedItems);
  };

  return (
    <div>
      <h2 className="d-flex justify-content-evenly text-center bg-white rounded-3 p-1 my-2 w-100">
        <FontAwesomeIcon icon={faLeftLong} /> {menu.title} <FontAwesomeIcon icon={faMagnifyingGlass} />
      </h2>
      <div className="container d-flex flex-column my-4" style={{ marginBottom: 0 }}>
        {menu.items?.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            isSelected={selectedItems[item]}
            handleCheckboxChange={handleCheckboxChange}
            counter={selectedItems[item] || 0}
            increaseCounter={increaseCounter}
            decreaseCounter={decreaseCounter}
          />
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

  
  