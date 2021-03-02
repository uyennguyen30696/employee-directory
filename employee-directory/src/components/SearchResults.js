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

    // API call for randomuser.me
    componentDidMount() {
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

                <table className="table text-center table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.map(employee => {
                            if (employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()) && this.state.search !== "") {
                                return (
                                    <tr key={employee.login.uuid}>
                                        <th scope="row"><img src={employee.picture.thumbnail} alt="Employee picture" /></th>
                                        <td>{employee.name.first}</td>
                                        <td>{employee.name.last}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.dob.date.substring(0, 10)}</td>
                                    </tr>
                                )
                            } else if (this.state.search === "") {
                                return (
                                    <tr key={employee.login.uuid}>
                                        <th scope="row"><img src={employee.picture.thumbnail} alt="Employee picture" /></th>
                                        <td>{employee.name.first}</td>
                                        <td>{employee.name.last}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.dob.date.substring(0, 10)}</td>
                                    </tr>
                                )
                            }
                        })
                        }
                    </tbody>
                </table>
            </div>
        );
    };
};

export default Search;
