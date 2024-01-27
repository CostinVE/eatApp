import React, { useState, useEffect } from "react";
import RestaurantData from "../assets/mock";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faMagnifyingGlass, faCartShopping, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const location = useLocation();
  const navigate = useNavigate();
  const [previousRoute, setPreviousRoute] = useState(null);

  useEffect(() => {
    // Update previous route when location changes
    setPreviousRoute(location.pathname);
  }, [location.pathname]);

  const handleGoBack = () => {
    // Navigate to the previous route
    navigate(-1);
  };

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
      <h2 className="d-flex text-center bg-white rounded-3 p-1 my-2 w-100">
            <FontAwesomeIcon icon={faLeftLong}  style={{marginRight: "2em"}} onClick={handleGoBack}/> &nbsp;&nbsp;&nbsp; {menu.title}
          </h2>
      <div className="container d-flex flex-column my-4" style={{ marginBottom: 0 }}>
      {menu.items?.map((item, index) => (
  <div key={index} className="d-flex flex-column my-3 p-3">
    <input
      style={{ display: "none" }}
      type="checkbox"
      id={`checkbox-${index}`}
      className="form-check-input"
      value={item}
      checked={selectedItems.includes(item)}
      onChange={() => handleCheckboxChange(item)}
    />
     
     
    <label htmlFor={`checkbox-${index}`} className="row row-cols-3 form-check-label shadow p-3 rounded-3" style={updateLabelStyle(item)}>
      <div className="col-2"><img src={item.details.img} style={{width: '80px', height: '80px', borderRadius: "20%"}} alt={'not found'} /></div>
      <div className="col-8"><h4 style={{marginTop: "1em", marginLeft: "1em"}} > {item.name}</h4></div>
      <div className="col-2"><span className="m-0 p-0 fs-4 text-success">${parseInt(item.details.price)}</span></div>
      <div className="col-2"></div>
      <div className="col-10"><p className="text-secondary ">{item.details.description}</p></div>

    </label>
  </div>
))}

      </div>
    </div>
  );
};


const RestaurantSubMenu = ({ restaurantIndex, submenuIndex }) => {
  const restaurant = RestaurantData[restaurantIndex];
  const submenu = restaurant?.menu[submenuIndex];
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
