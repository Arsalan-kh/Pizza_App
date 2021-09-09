import React from 'react';
import {useHistory} from 'react-router';
import './style.css';

function Start(){
    let history = useHistory()
    return(
        <>
       <div className="container-fluid">
                  <div className="buttons">
         <button className="   m-4 btn w-25 btn-danger"  onClick={() => history.push('./ViewOrder')}>ViewOrder</button>
         <button className="   m-4 btn w-25 btn-danger"  onClick={() => history.push('./PlaceOrder')}>PlaceOrder</button>
        <a href="/CancleOrder" className="  m-4 btn w-25 btn-danger"  onClick={() => history.push('./CancelOrder')}>CancelOrder</a>
         </div>
         </div>
 
        
         
                            
                            
        </>

    )
}

export default Start;