import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "./SearchBar";
import Table from "./Table";

class Search extends Component {

    state = {
        order: "not sorted",
        search: "",
        results: []
    };

    componentDidMount() {
        // API call for randomuser.me
        API.search()
            .then(res => {
                console.log(res);
                this.setState({ results: res.data.results });
            })
            .catch(err => console.log(err));
    };

    // Get value from typing input
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    // Sort by first name A-Z to special characters
    sortByFirstName = () => {
        let sortedASC = this.state.results.sort((a, b) => {
            if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
                return -1;
            }
            if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
                return 1;
            }
            return 0;
        });

        if (this.state.order === "not sorted") {
            this.setState({ order: "sorted", results: sortedASC });
        } else if (this.state.order === "sorted") {
            // The orginal unsorted list can not be reserved yet, but this step reverses the order from ascending to descending
            this.setState({ order: "not sorted", results: sortedASC.reverse() });
        };
    };

    // Sort by last name A-Z to special characters
    sortByLastName = () => {
        let sortedASC = this.state.results.sort((a, b) => {
            if (a.name.last.toLowerCase() < b.name.last.toLowerCase()) {
                return -1;
            }
            if (a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
                return 1;
            }
            return 0;
        });

        if (this.state.order === "not sorted") {
            this.setState({ order: "sorted", results: sortedASC });
        } else if (this.state.order === "sorted") {
            // The orginal unsorted list can not be reserved yet, but this step reverses the order from ascending to descending
            this.setState({ order: "not sorted", results: sortedASC.reverse() });
        };
    };

    render() {
        return (
            <div>
                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                />

                <Table
                    results={this.state.results}
                    search={this.state.search}
                    sortByFirstName={this.sortByFirstName}
                    sortByLastName={this.sortByLastName}
                />
            </div>
        );
    };
};

export default Search;