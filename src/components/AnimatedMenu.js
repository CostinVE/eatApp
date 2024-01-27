import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faSmoking, faGift, faTruckFast, faCartShopping, faClock, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import './style.css'



const AnimatedMenu = () => {
    return (
        <section style={{margin: "0", padding:"0", display: "flex", justifyContent: "center", alignItems:"center", textAlign: "center"}}>
        <div class="clock">
        <div class="position position--11"><p style={{display: "flex", flexDirection:"column", marginTop:"10px"}}> <FontAwesomeIcon icon={faClock} style={{ fontSize:"28px",color: "#790275",}} /> HOT </p></div>
        <div class="position position--1"><p style={{display: "flex", flexDirection:"column", marginTop:"10px"}}> <FontAwesomeIcon icon={faSmoking} style={{fontSize: "28px",color:"#ae4804"}}/> Tobbaco </p></div>
        <div class="position position--3"><p style={{display: "flex", flexDirection:"column", marginTop:"10px"}}> <FontAwesomeIcon icon={faWineGlass} style={{fontSize:"28px",color: "#00ccf5",}} /> Drinks </p></div>
        <div class="position position--7"><p style={{display: "flex", flexDirection:"column", marginTop:"10px"}}> <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "28px",color: "#d40c34",}} /> Market </p></div>
        <div class="position position--5"><p style={{display: "flex", flexDirection:"column", marginTop:"10px"}}> <FontAwesomeIcon icon={faGift}  style={{fontSize: "28px",color:"#e56fe7"}}/> Shops </p></div>
        <div class="position position--9"><p style={{display: "flex", flexDirection:"column", marginTop:"10px"}}> <FontAwesomeIcon icon={faTruckFast} style={{ fontSize: "28px",color: "#2b7005",}} /> Courier </p></div>
        <div class="position position--middle" > <p style={{display: "flex", flexDirection:"column", marginTop:"10px"}}> <FontAwesomeIcon icon={faUtensils} style={{fontSize: "28px"}}/> Food </p></div>
    </div>
    </section>
    );
  };


export default AnimatedMenu;
