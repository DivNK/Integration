import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import {

    Link

} from "react-router-dom";
import "./stylesforall.css"

export default function App() {
    Axios.defaults.withCredentials = true;

    let [book, setBook] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
        console.log("**********");
        console.log(book);
    }
    async function sendData() {

        // let qr=document.querySelector("input")
        // console.log(res.data);
        // console.log(qr.innerHTML);
        console.log("Enter Send data");
        console.log("**********");
        console.log(book);
        try{
        let res = await Axios.get("http://127.0.0.1:3001/AddBook", { params: book }, { withCredentials: true })

        console.log(res.headers);
        if (res.data.includes("entered")) {
            console.log("enter");
            navigate('/list')
        }}
        catch(e)
        {
            console.log(e);
        }

    }
    return (


        <div className='container'>

            <div className='cont-det'>

                <div className='cont-in'>
                    <legend >Book Details</legend>
                    <br></br>
                    <div className='vals'><p> Book Name </p><input type="email" name="bookName" onChange={handleChange} /></div>
                    <div className='vals'> <p>Author</p><input type="text" name="bookAuthor" onChange={handleChange} /></div>
                    <div className='vals'> <p>Quantity</p><input type="text" name="bookQuantity" onChange={handleChange} /></div>
                    <br></br>
                    <button onClick={sendData}>Submit</button>   </div>

            </div>
        </div>


    );
}