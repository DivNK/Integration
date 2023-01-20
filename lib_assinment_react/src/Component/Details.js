import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import "./stylesforall.css"
export default function App(){

    const { state } = useLocation();
  console.log(state);
    
    
    return(
      <div className='cont-det'>
       <div className='cont-in'>
       
       <div className='vals'><p>{state.bookName}</p></div>
       <div className='vals'> <p>Book Author: </p><p>{state.bookAuthor}</p></div>
       <div className='vals'><p> Available copies: </p><p>{state.bookQuantity}</p></div>
        

       </div>
      </div>
    )
}