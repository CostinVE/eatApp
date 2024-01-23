import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import RestaurantMenu from './RestaurantMenuComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const body = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#56f099",
    alignContent: "center",
    width:"500px",
    borderRadius:"6%", 
    height:"100vh",
    fontWeight: "bold",
    overflow: "auto",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)"
}


const MainComponent = () => {
  return (
    <div className='container' style={{width: "fit-content", overflow: "auto"}}>
    <div style={body}>
      <div className='container d-flex justify-content-center p-3'>
      <button type="button" className="btn btn-outline-light rounded-5 border-0" style={{fontWeight: "600",color:"white"}}>
      <FontAwesomeIcon icon={faUser} style={{color: "#000000",fontSize: "28px"}} />
      </button><label className='w-75 mx-3'>
      <div class="input-group input-group-sm mb-3">
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
      <button type='button' className='btn btn-outline-light border-0 p-3 rounded-3 mx-2'>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000", fontSize: "24px"}} />
      </button>
     </div>
     </label>
     </div>
      </div>
    </div>
  );
};

export default MainComponent;