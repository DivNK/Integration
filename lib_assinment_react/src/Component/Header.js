import React from "react";

import {

    Link

} from "react-router-dom";


export default function App() {
    return (
        <div className="top-header">
            <Link to="/">
                <div className="individual">
                <p> Home</p>
                </div>
            </Link>
            <Link to="/login">
            <div className="individual">
                <p> Login</p>
                </div>
            </Link>
        </div>
    );

}