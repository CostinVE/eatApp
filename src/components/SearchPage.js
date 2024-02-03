import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RestaurantData from '../assets/mock';

const SearchPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('searchTerm');

    // Assuming you have some data to filter
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Perform the filtering logic here based on the search term
        // Replace this with your actual data filtering logic
        const filteredResults = RestaurantData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredData(filteredResults);
    }, [searchTerm]);

    return (
        <div>
            <h2>Search Results for: {searchTerm}</h2>
            <ul>
                {filteredData.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPage;
