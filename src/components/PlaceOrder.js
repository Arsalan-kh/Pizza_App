import React from 'react';
import swal from 'sweetalert';
import "./style.css"

function PlaceOrder(){
    return(
        <>
        <div className="order_form">
 
   <div className="input-group mb-3 ">
  <div className="input-group-prepend">
    <label className="input-group-text" for="inputGroupSelect01">Crust</label>
  </div>
  <select className="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">Thin Crust</option>
    <option value="2">Normal Crust</option>
    <option value="3">Cheese Filled Crust</option>
  </select>
  <div className="input-group-prepend">
    <label className="input-group-text" for="inputGroupSelect01">Flavour</label>
  </div>
  <select className="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">Chicken-Fajita</option>
    <option value="2">Mushrrom</option>
    <option value="3">Wood Italian</option>
  </select>
  <div className="input-group-prepend">
    <label className="input-group-text" for="inputGroupSelect01">Options</label>
  </div>
  <select className="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  
</div>


     <button  style={{boxShadow:"0 0 30px 0 white"}} className="btn w-25 btn-danger d-flex justify-content-center " onClick = {() => orderPizza()}>Confirm Your Order Now!</button>
   </div>
        </>

    )
}
function  orderPizza(){
    swal({
        title: "THANK YOU!",
        text: "Your order is confirmed!",
        icon: "success",
      });
}

export default PlaceOrder;
