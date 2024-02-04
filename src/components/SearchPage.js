import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RestaurantData from '../assets/mock';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faMagnifyingGlass, faRightLong } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const body = {
    width:"500px",
    display: "flex",
    flexDirection: "column",
    borderRadius:"6%", 
    height:"100vh",
    fontWeight: "bold",
    overflow: "auto",
  }

const SearchPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('searchTerm');
    const navigate = useNavigate()

    const hoverEffectClass = "hover-effect";

    const searchItem = (query) => {
        // Iterate over your data array to find the matching item
        const matchingItem = RestaurantData.find(item => item.title.toLowerCase().includes(query.toLowerCase()));
        
        // Return the entire item object if found, or null if not found
        return matchingItem;
      };
      

    const searchedItem = searchItem(searchTerm);


    // Assuming you have some data to filter
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Perform the filtering logic here based on the search term
        // Replace this with your actual data filtering logic
        const filteredResults = RestaurantData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredData(filteredResults);
    }, [searchTerm]);

    const handleClick = () => {
      if (searchedItem) {
        navigate(`/${searchedItem.title.toLowerCase()}`);
      }
    };

    const handleGoBack = () => {
        // Navigate to the previous route
        navigate(-1);
    }

    return (
        <div className="container shadow-lg" style={{ width: "fit-content", overflow: "auto" }}>
      <div style={body}>
      <h2 className="d-flex text-center bg-white rounded-3 p-1 my-2 w-100">
        <FontAwesomeIcon icon={faLeftLong}  style={{marginRight: "2em", cursor:"pointer"}} onClick={handleGoBack}/> &nbsp;&nbsp;&nbsp; Search Results
        </h2>
        {searchedItem ? (
        <div className={`d-flex flex-column shadow p-3 rounded-5 justify-content-center align-items-center text-center position-relative ${hoverEffectClass}`} style={{height:"fit-content",cursor:"pointer"}} onClick={handleClick}>
        <img className="img-fluid w-75 rounded-5" src={searchedItem.img} alt={searchedItem.title} />
        <h2 className="position-absolute bottom-40 start-50 translate-middle-x text-light">
          {searchedItem.title}
        </h2>
    
      </div>
      ) : (
        <div>No results found</div>
      )}
            {/* <ul>
                {filteredData.map(item => (
                    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${item.img})` }}>
                        {console.log(item.img)}
                    <h3 key={item.id}>{item.title}</h3>
                  </div>
                
                
                
                ))}
            </ul> */}
        </div>
        </div>
    );
}


export default SearchPage;
