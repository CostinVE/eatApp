import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import RestaurantMenu from './RestaurantMenuComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import AnimatedMenu from './AnimatedMenu';
import ControlledCarousel from './ControlledCarousel';
import SearchComponent from './SearchComponent';

const body = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#56f099",
    width: "500px",
    borderRadius: "6%",
    overflow: "auto",
    height: "100vh",
    fontWeight: "bold",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)"
}

const MainComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // Trigger the search logic and navigate to the search page
        navigate(`/searchPage?searchTerm=${searchTerm}`);
    };

    return (
        <div className='container' style={{ width: "fit-content" }}>
            <div style={body}>
                <div className='container d-flex mx-3 justify-content-center p-3' style={{ marginBottom: "8em", marginTop: "5%" }}>
                    <button type="button" className="btn btn-outline-light rounded-5 border-0" style={{ fontWeight: "600", color: "white" }}>
                        <FontAwesomeIcon icon={faUser} style={{ color: "#000000", fontSize: "28px" }} />
                    </button>
                    <label className='w-75 mx-3'>
                        <div className="input-group input-group-sm mb-3">
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                                value={searchTerm}
                                onChange={handleChange}
                            />
                            <button
                                type='button'
                                className='btn btn-outline-light border-0 p-3 rounded-3 mx-2'
                                onClick={handleSearch}
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000", fontSize: "24px" }} />
                            </button>
                        </div>
                    </label>
                </div>
                <div style={{ marginRight: "35px", marginBottom: "auto", }}>
                    <div className='rotateInDownLeft'>
                        <AnimatedMenu />
                    </div>
                </div>
                <section className='container-fluid d-flex flex-column bg-dark' style={{ borderTopLeftRadius: '35%', borderTopRightRadius: '65%', overflow: "auto" }}>
                    <div className='d-flex flex-column' style={{ marginLeft: "40px", marginTop: "40px" }}>
                        <p className='roboto-italic text-secondary m-0'>Sponsored</p>
                        <h4 className='roboto-bold text-white fw-medium my-1'> Featured Stores </h4>
                    </div>
                    <div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MainComponent;
