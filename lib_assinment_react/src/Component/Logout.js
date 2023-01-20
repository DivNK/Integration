import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import {

    Link

} from "react-router-dom";

import "./stylesforall.css"
export default function App() {
    Axios.defaults.withCredentials = true;


    const navigate = useNavigate();


    async function sendData() {


        console.log("**********");


        let res = await Axios.get("http://127.0.0.1:3001/Logout", { withCredentials: true })

        console.log(res.headers);

        navigate('/')


    }
    return (


        <div className='container'>
            <h3>Do you really want to logout</h3>
            <button onClick={sendData}>Yes</button>
        </div>




    );
}