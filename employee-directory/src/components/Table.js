import React from "react";
import API from "../utils/API";
import SearchBar from "./SearchBar";
import "../styles/Table.css";

function Table(props) {
    return (
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
                <tr key={props.children}>
                    <th scope="row">{props.children}</th>
                    <td>{props.children}</td>
                    <td>{props.children}</td>
                    <td>{props.children}</td>
                    <td>{props.children}</td>
                    <td>{props.children}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
