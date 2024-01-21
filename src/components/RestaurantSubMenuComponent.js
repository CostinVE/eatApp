import React,{useState, useRef} from "react";
import RestaurantData from "../assets/mock";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';




const body = {
  width:"500px",
  borderRadius:"6%", 
  height:"100vh",
  fontWeight: "bold",
  overflow: "auto",
}

const MenuComponent = ({ menu }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    const updatedSelectedItems = [...selectedItems];

    // Toggle the selection state of the item
    if (updatedSelectedItems.includes(item)) {
      updatedSelectedItems.splice(updatedSelectedItems.indexOf(item), 1);
    } else {
      updatedSelectedItems.push(item);
    }

    setSelectedItems(updatedSelectedItems);
    console.log(`Selected Items: ${updatedSelectedItems.join(', ')}`);
  };

  const updateLabelStyle = (item) => {
    return {
      backgroundColor: selectedItems.includes(item) ? '#f0d01f' : 'white',
    };
  };

  return (
    <div>
      <h2 className="d-flex justify-content-evenly text-center bg-white rounded-3 p-1 my-2 w-100">
        <FontAwesomeIcon icon={faLeftLong} /> {menu.title} <FontAwesomeIcon icon={faMagnifyingGlass} />
      </h2>
      <div className="container d-flex flex-column my-4" style={{marginBottom: 0}}>
        {menu.items?.map((item, index) => (
          <div key={index} className="form-check my-2">
            <input
              style={{display: "none"}}
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
  
  const RestaurantSubMenu = ({ submenuIndex } ) => {
    const submenu = RestaurantData[0]?.menu[submenuIndex];
  
    return (
        <div className="container d-flex justify-content-center flex-column shadow-lg" style={{ width: "fit-content", overflow: "auto" }}>
      <div style={body}>
        {submenu && <MenuComponent key={submenu.id} menu={submenu} />}
      </div>
      <Button variant="outline" className="shadow-sm text-bg-warning p-3 my-3 fw-bold rounded-5 border-0">  Add to Cart &nbsp;&nbsp;  <FontAwesomeIcon icon={faCartShopping} bounce size="lg" /> </Button>
    </div>
    );
  };
  
  export default RestaurantSubMenu;
  
  