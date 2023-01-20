import "./stylesforall.css"
import React, { useState, useEffect } from "react"
import Axios from "axios"
import Srchbox from "./Srchbox"
import { useNavigate } from "react-router-dom";
import {

    Link, Navigate

} from "react-router-dom";

import "./stylesforall.css"

export default function App() {

    const navigate = useNavigate();
    // useEffect ,dependency array should be empty
    //axios 
    // store the data in state and than we will map it inside our react component
    let [data, setData] = useState([]);
    let [inputValue, setinputValue] = useState('')

    useEffect(() => {
        const fetchData = async () => {
           try{let res = await Axios.get("http://127.0.0.1:3001/book", { withCredentials: true }); // if you use proxy then only /book isusing cros gem then complete path
            console.log(res.data);
            setData(res.data)

            // arryay of objects
        }catch(e)
        {
            
            console.log(e);
        }
    } 
        {

        }
        fetchData()
    }, [])
    console.log(data);

    //inside map have either return or have () 
    //{data.length && data.map((ele) => (<div></div>))} 

    let filterData = data.filter((ele) => ele.bookAuthor.toLowerCase().includes(inputValue.toLowerCase()) || ele.bookName.toLowerCase().includes(inputValue.toLowerCase()));

    // return (
    //     <div>
    //         <div>Search Here :<Srchbox setinputValue={setinputValue} /></div>

    //         <div className='container'>

    //             {filterData.length ? filterData.map((ele) => (

    //                 <div className='cont-in'>
    //                     <div class="card-content">
    //                         <div>Name: {ele.bookName}</div>

    //                         <div>Author: {ele.bookAuthor}</div>


    //                     </div>
    //                 </div>
    //             )) : data.length && data.map((ele) => (

    //                 <div className='cont-in'>
    //                     <div class="card-content">
    //                         <div>Book Name:{ele.bookName}</div>
    //                         <div>Book Author:{ele.bookAuthor}</div>
    //                     </div>
    //                 </div>

    //             ))
    //             }</div>
    //     </div>
    // );


    return (



        <div className='container'>
            <div className="sec-l1">Search Book by Name or Author :<Srchbox setinputValue={setinputValue} /></div>
            <br></br>

            <div className='cont-det'>

                <div className='cont-in1'>
                    <legend>Book Title</legend>
                    {/* <th>Details</th> */}
                    {filterData.length ? filterData.map((ele) => (


                        <tr>
                            {/* <td><button onClick={()=>navigate("/details",{state:ele})}>Details</button></td> */}
                            <Link to="/details" state={ele}>

                                <td> {ele.bookName}</td>

                            </Link>
                        </tr>


                    )) : data.length ? data.map((ele) => (


                        <tr>
                            <Link to="/details" state={ele}>

                                <td> {ele.bookName}</td>

                            </Link></tr>


                    )) : <div><p>No Books Currently Available</p>
                        <p>To add book 
                        <Link to="/addbook" >

                            Click here

                        </Link></p>
                    </div>
                    } </div>
            </div>
        </div>

    );
}
