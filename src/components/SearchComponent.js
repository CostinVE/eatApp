import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchComponent = () => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.searchInput.value;
    // Perform search logic here
    // If search is successful, navigate to the search page
    navigate(`/searchPage?query=${searchValue}`);
  };
};

export default SearchComponent;

