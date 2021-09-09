
import React, {useEffect, useState} from 'react';

function ViewOrder(){
        
const [pizzaData, setPizzaData] = useState([]);

useEffect(() => {
    fetch("https://order-pizza-api.herokuapp.com/api/orders")
.then((response) => { console.log (response.json)
  response.json()
.then((result) =>{
    console.log("result",result)
    setPizzaData(result)
})
  
})
  },[]) 

return(
<>
{pizzaData.map((item) =>(
      
      <div className="card-body">
        <h5 className='card-name'>Crust: {item.Crust} </h5>
        <h5 className='card-type'>Flavour: {item.Flavour} </h5>
        <h5 className='card-size'>Size: {item.Size} </h5>
        <h5 className='card-Order'>Order_ID: {item.Order_ID} </h5>
      </div>


))}
</>

);} 
  

export default ViewOrder;
