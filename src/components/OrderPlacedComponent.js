import React,{useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong} from "@fortawesome/free-solid-svg-icons";
import './style.css'



const body = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#56f099",
    alignItems: "center",
    justifyContent: "space-between",
    width:"500px",
    borderRadius:"6%", 
    height:"100vh",
    fontWeight: "bold",
    overflow: "auto",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)"
  }



export const OrderPlacedComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [previousRoute, setPreviousRoute] = useState(null);
  
    const handleGoBack = () => {
        // Navigate to the previous route
        navigate(-1);
        // Change the background color to yellow
        
      };
      
  return (
    <div className="container d-flex justify-content-center">
  <div style={body}>
  <h2 className="d-flex align-self-baseline m-3 rounded-3 p-1 w-25">
        <FontAwesomeIcon className='hover-effect-white' icon={faLeftLong}  style={{fontSize:"48px", padding:"6%", borderRadius: "12%"}} onClick={handleGoBack}/>
        </h2>
    <h2 style={{fontWeight:"bold"}}>Your order is on it's way</h2>
    <img className='bounce' src={require('./images/fast-delivery.png')} style={{width: "300px"}} alt="Delivery Icon"  />
    <div className='container-fluid d-flex text-center p-5 bg-dark'style={{ borderTopLeftRadius: '25%', borderTopRightRadius: '25%' }}>
        <h3 className='text-white roboto-regular'> &nbsp;&nbsp; Estimated arrival in 45 min</h3>
    </div>
  </div>
</div>

  )
}
