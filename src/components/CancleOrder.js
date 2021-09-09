import React from 'react';
import '../components/style.css'
function CancleOrder(){
    return(
        <>
<div className="container_cancleorder">
  <div className="interior">
    <a className="btn btn_model" href="#open-modal">👋Are you Sure?</a>
  </div>
</div>
<div id="open-modal" className="modal-window">
  <div>
    <a href="/CancleOrder" title="Close" className="modal-close">Close</a>
    <h1>Your Order Has Been Cancelled</h1>
    <div>For Place a New order Kindly click the link Below 👇</div>
    <div><small style={{color:"red"}}>Check out</small></div>
    <a href="/PlaceOrder">👉 Click Here for Order</a></div>
    </div>
<div/>


       </>
    
    
    )}
  


export default CancleOrder;
