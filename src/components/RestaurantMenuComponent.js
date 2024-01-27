import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faMagnifyingGlass, faRightLong } from "@fortawesome/free-solid-svg-icons";
import './style.css'



const body = {
  width:"500px",
  borderRadius:"6%", 
  height:"100vh",
  fontWeight: "bold",
  overflow: "auto",
}
const hoverEffectClass = "hover-effect";

function RestaurantMenuComponent({ restaurant }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [previousRoute, setPreviousRoute] = useState(null);

  

  const handleMenuItemClick = (menu) => {
    // Construct the submenu route based on the menu ID
    const submenuRoute = `/${restaurant.id}/${menu.id}`;
    navigate(submenuRoute);
  };


  const handleGoBack = () => {
    // Navigate to the previous route
    navigate(-1);
  
  
  
    
  };
  return (
    <div className="container shadow-lg" style={{ width: "fit-content", overflow: "auto" }}>
      <div style={body}>
        <h2 className="d-flex text-center bg-white rounded-3 p-1 my-2 w-100">
        <FontAwesomeIcon icon={faLeftLong}  style={{marginRight: "2em"}} onClick={handleGoBack}/> &nbsp;&nbsp;&nbsp; {restaurant.title}
        </h2>
        <div className="border-bottom border-success border-3 mb-2 p-4">
        <img src={restaurant.img} className="rounded-5" style={{width: "450px", height:"250px"}}></img>
        </div>
        {restaurant.menu.map((menu, index) => (
          <div className="container my-3" key={index}>
          <label className={`rounded-3 shadow my-2 px-2 py-3 w-100 ${hoverEffectClass}`} onClick={handleMenuItemClick}>
            <div
              className="d-flex justify-content-between" // Apply hover effect class conditionally
            >
              <h3>{menu.title}</h3>
              <FontAwesomeIcon icon={faRightLong} style={{ fontSize: "28px", marginRight: "1em" }}/>
            </div>
          </label>
        </div>
        ))}
      </div>
    </div>
  );
}

    

export default RestaurantMenuComponent