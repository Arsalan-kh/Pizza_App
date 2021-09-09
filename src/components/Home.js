import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
  import image from '../img/2.png'  
  // import PlaceOrder from './PlaceOrder'
const Buttons = () => {
    return (
        <div>
    
    <div className="container">
      <div className="header_text">
        <h1>Feeling <span>Hungry!</span></h1> <br/>
        <h2>Try Wood Fire Italian Pizza</h2>
        <p>Saucy and cheesy <b>Italian pizza</b> ready to dine out.<br/>We offer a wide varities of pizza so what are you waiting for?<br/> Italian Pizza are waiting for you! Hurry up Grab your <b>Deal Now !</b></p>
    <a  href="/Start"   className="mt-5 btn-lg  CTA btn btn-danger">Order Nows</a>
      </div>
      <div className="header_img"> 
      <img src={image}/>
      </div>
    </div>  
 
        </div>
    )
}

export default Buttons
