import React from "react";
import "../styles/SearchBar.css";

function SearchBar(props) {
    return (
        <div className="input-group mb-3">
            <input type="text" 
            className="form-control" 
            placeholder="Search for Employee" 
            aria-label="Search" 
            aria-describedby="button-addon2"
            value={props.search}
            onChange={props.handleInputChange} />
        </div>
    );
};

export default SearchBar;
