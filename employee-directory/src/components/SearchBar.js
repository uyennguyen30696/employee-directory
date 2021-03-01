import React from "react";
import "../styles/SearchBar.css";

function SearchBar() {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search for Employee" aria-label="Search" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>
    );
};

export default SearchBar;
