import React from "react";
import "./stylesforall.css"
import {

    Link

} from "react-router-dom";


export default function App() {
    return (
        <div className="top-header">
            <div className="sec1">
            <Link to="/">
                <div className="individual">
                <p> Home</p>
                </div>
            </Link>

            <Link to="/list">
            <div className="individual">
                <p> Book List</p>
                </div>
            </Link>
            <Link to="/addbook">
            <div className="individual">
                <p> Add Book</p>
                </div>
            </Link>
            </div>
            <div className="sec2">
            <Link to="/login">
            <div className="individual">
                <p> Login</p>
                </div>
            </Link>
            <div className="individual"><p>/</p></div>
            <Link to="/logout">
            <div className="individual">
                <p> Logout</p>
                </div>
            </Link>
            </div>
        </div>
    );

}