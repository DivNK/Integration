import React, { useState, useEffect } from 'react';
import "./stylesforall.css"
export default function App({setinputValue}){


    function handleChange(e){
         setinputValue(e.target.value)
    }
    return(
        <>
        <input placeholder='Enter Here' onChange={handleChange}/>
        </>
    )
}