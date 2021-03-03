import React from "react";
import DateFormat from "dateformat";
import "../styles/Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";


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
        <div className="table-container">
        <table className="table text-center table-striped table-hover">
            <thead className="table-head">
                <tr>
                    <th id="image-title" scope="col"><span>Image <FontAwesomeIcon icon={faImage} /></span></th>
                    <th scope="col">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                        onClick={props.sortByFirstName}>
                        First Name
                        </button>
                    </th>
                    <th scope="col">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                        onClick={props.sortByLastName}>
                        Last Name
                        </button>
                    </th>
                    <th scope="col"><span>Phone <FontAwesomeIcon icon={faPhone} /></span></th>
                    <th scope="col"><span>Email <FontAwesomeIcon icon={faEnvelope} /></span></th>
                    <th scope="col"><span>DOB <FontAwesomeIcon icon={faBirthdayCake} /></span></th>
                </tr>
            </thead>

            <tbody>
                {props.results.map(employee => {
                    if (employee.name.first.toLowerCase().includes(props.search.toLowerCase()) 
                        || employee.name.last.toLowerCase().includes(props.search.toLowerCase())
                        && props.search !== "") {
                        return (
                            <tr className="table-row" key={employee.login.uuid}>
                                <th scope="row"><img src={employee.picture.thumbnail} alt="Employee picture" /></th>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{formatPhoneNumber(employee.phone)}</td>
                                <td>{employee.email}</td>
                                <td>{DateFormat(employee.dob.date.substring(0, 10), "mmmm dS, yyyy")}</td>
                            </tr>
                        )
                    } else if (props.search === "") {
                        return (
                            <tr className="table-row" key={employee.login.uuid}>
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
        </div>
    );
};

export default Table;
