import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "./SearchBar";
import Table from "./Table";
import "../styles/SearchResults.css";

class Search extends Component {

    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        // API call for randomuser.me
        API.search()
            .then(res => {
                console.log(res);
                this.setState({ results: res.data.results })
            })
            .catch(err => console.log(err));
    };

    // Get value from typing input
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    };

    render() {
        return (
            <div>
                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleSubmitChange={this.handleSubmitChange}
                />

                <Table
                    results={this.state.results}
                    search={this.state.search}
                />
            </div>
        );
    };
};

export default Search;
