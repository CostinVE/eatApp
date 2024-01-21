import React,{useState, useRef} from "react";
import RestaurantData from "../assets/mock";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";



const body = {
  width:"500px",
  borderRadius:"6%", 
  height:"100vh",
  fontWeight: "bold",
  overflow: "auto",
}

const MenuComponent = ({ menu }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedLabelIndex, setSelectedLabelIndex] = useState(null);
  const initialLabelIndexRef = useRef(null);

  const handleLabelClick = (item, index) => {
    if (selectedLabelIndex === index) {
      // Case 3: Clicking the same label again
      setSelectedItem(null);
      setSelectedLabelIndex(null);
      initialLabelIndexRef.current = null;
    } else {
      // Case 1: First time clicking any label or Case 2: Clicking a different label
      setSelectedItem(item);
      setSelectedLabelIndex(index);

      // Set the initial index only if it's the first time clicking any label
      if (initialLabelIndexRef.current === null) {
        initialLabelIndexRef.current = index;
      }

      console.log(`Order Details - Item: ${item}`);
    }
  };


  const updateLabelStyle = (index) => {
    return {
      backgroundColor: (selectedLabelIndex || initialLabelIndexRef.current === index) ? '#f0d01f' : 'white',
    };
  };

  return (
    <div>
      <h2 className="d-flex justify-content-evenly text-center bg-white rounded-3 p-1 my-2 w-100">
        <FontAwesomeIcon icon={faLeftLong} /> {menu.title} <FontAwesomeIcon icon={faMagnifyingGlass} />
      </h2>
      <div className="container d-flex flex-column my-4">
        {menu.items?.map((item, index) => (
          <label
            key={index}
            className="shadow my-2 p-3 rounded-3"
            style={updateLabelStyle(index)}
            onClick={() => handleLabelClick(item, index)}
          >
            {item}
          </label>
        ))}
      </div>
      {console.log(`Order Details - Item: ${selectedItem}`)}
    </div>
  );
};
  
  const RestaurantSubMenu = ({ submenuIndex } ) => {
    const submenu = RestaurantData[0]?.menu[submenuIndex];
  
    return (
        <div className="container shadow-lg" style={{ width: "fit-content", overflow: "auto" }}>
      <div style={body}>
        {submenu && <MenuComponent key={submenu.id} menu={submenu} />}
      </div>
    </div>
    );
  };
  
  export default RestaurantSubMenu;
  
  