import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import {
 
    Link
      
      } from "react-router-dom";


export default function App()
{
    Axios.defaults.withCredentials = true;

    let[login,setLogin]=useState({});
    const navigate = useNavigate();
    
    const handleChange=(e)=>
    {
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        })
        console.log("**********");
        console.log(login);
    }
    async function sendData() {

        // let qr=document.querySelector("input")
        // console.log(res.data);
        // console.log(qr.innerHTML);
        console.log("Enter 11Send data");
        console.log("**********");
        console.log(login);
        // let res = await Axios.get("http://127.0.0.1:3001/Login", { params: login },{withCredentials: true})
        let res = await Axios.post("http://127.0.0.1:3001/login", login,{withCredentials: true})

        console.log(res.headers);
        if(res.data.includes("Successfull"))
        {
            navigate('/list')
        }
       
    }
    return(
<>

<center>

        <legend >Login Details</legend>
        <table >
            <tr>
                <td >
                <label >Email</label></td>
                <td >
                    <input type="email" name="userEmail" onChange={handleChange}/>
                </td>
            </tr>
            <tr>
                <td >
                <label >Password </label></td>
                <td >
                    <input type="text" name="password" onChange={handleChange}/>
                </td>
            </tr>
        </table>
  

     <button onClick={sendData}>Submit</button>   </center>

</>

    );
}