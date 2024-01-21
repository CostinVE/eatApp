import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import RestaurantMenu from './RestaurantMenuComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const body = {
    backgroundColor: "#56f099", 
    width:"500px",
    borderRadius:"6%", 
    height:"100vh",
    fontWeight: "bold",
    overflow: "auto"
}


const MainComponent = () => {
  return (
    <div style={body}>
        <div className='container' style={{marginTop: "5%"}}>
      <button type="button" className="btn btn-outline-light border-3" style={{fontWeight: "600",color:"white",borderRadius: "50%"}}>
      <FontAwesomeIcon icon={faUser} style={{color: "#000000",fontSize: "28px"}} />
      </button><label className='w-75 mx-3'>
      <div class="input-group input-group-sm mb-3">
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
      <button type='button' className='btn btn-outline-dark border-2 rounded-3 mx-1'>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#FFFFFF", fontSize: "24px"}} />
      </button>
     </div>
     </label>
      </div>
    </div>
  );
};

export default MainComponent;