import React from "react";
import "../styles/Table.css";
import DateFormat from 'dateformat';

// Reformat phone number to (123) 456-789 format if having 10 digits
// Reformat phone number t0 12-345-678 format if having 8 digits
function formatPhoneNumber(phoneNumber) {
    let clean = phoneNumber.replace(/\D/g, "");
    let tenDigits = clean.match(/(\d{3})(\d{3})(\d{4})/);
    let eightDigits = clean.match(/(\d{2})(\d{3})(\d{3})/);
    if (tenDigits) {
        return clean.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    } else if (eightDigits) {
        return clean.replace(/(\d{2})(\d{3})(\d{3})/, "$1-$2-$3");
    } else {
        return phoneNumber;
    };
};

function Table(props) {
    return (
        <table className="table text-center table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                        onClick={props.sortByFirstName}>
                        First Name
                        </button>
                    </th>
                    <th scope="col">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                        onClick={props.sortByLastName}>
                        Last Name
                        </button>
                    </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>

            <tbody>
                {props.results.map(employee => {
                    if (employee.name.first.toLowerCase().includes(props.search.toLowerCase()) 
                        || employee.name.last.toLowerCase().includes(props.search.toLowerCase())
                        && props.search !== "") {
                        return (
                            <tr key={employee.login.uuid}>
                                <th scope="row"><img src={employee.picture.thumbnail} alt="Employee picture" /></th>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{formatPhoneNumber(employee.phone)}</td>
                                <td>{employee.email}</td>
                                <td>{employee.dob.date.substring(0, 10)}</td>
                            </tr>
                        )
                    } else if (props.search === "") {
                        return (
                            <tr key={employee.login.uuid}>
                                <th scope="row"><img src={employee.picture.thumbnail} alt="Employee picture" /></th>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{formatPhoneNumber(employee.phone)}</td>
                                <td>{employee.email}</td>
                                <td>{DateFormat(employee.dob.date.substring(0, 10), "mmmm dS, yyyy")}</td>
                            </tr>
                        )
                    }
                })}
            </tbody>
        </table>
    );
};

export default Table;
