import React from "react";
import RestaurantData from "../assets/mock";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



const body = {
  width:"500px",
  borderRadius:"6%", 
  height:"100vh",
  fontWeight: "bold",
  overflow: "auto",
}

function RestaurantMenuComponent() { console.log(RestaurantData)
  return (
    <div className="container shadow-lg" style={{width: "fit-content", overflow: "auto"}}>
     <div style={body}>
      {RestaurantData.map((restaurant) => (
        <div key={restaurant.id}>
          <h2 className="d-flex justify-content-evenly text-center bg-white rounded-3 p-1 my-2 w-100"> <FontAwesomeIcon icon={faLeftLong} /> {restaurant.title} <FontAwesomeIcon icon={faMagnifyingGlass} /> </h2>
          {restaurant.menu.map((menu, title) => (
            <div className="container my-3" key={title}>
              <h3 className="bg-white rounded-3 shadow my-2 px-2 py-3">{menu.title || Object.keys(menu)[0]}</h3>
              {/* Add your additional rendering logic here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  );
}

    

export default RestaurantMenuComponent