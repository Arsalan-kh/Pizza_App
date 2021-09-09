import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Start from './components/Start';
import ViewOrder from './components/ViewOrder';
import PlaceOrder from './components/PlaceOrder';
import CancleOrder from './components/CancleOrder';

import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return(
  <>

     <Router>
      <div>
      <div className="nav_bar">
         <nav>
         <ul>
         <li>
               <Link to="/"className="logo">PizZa</Link>
             </li>
             <div className="nav-items">
             <li>
               <Link className="nav-item" to="/">Home</Link>
             </li>
             <li>
               <Link className="nav-item" to="/">About</Link>
             </li>
             <li>
               <Link className="nav-item" to="/">Contact</Link>
             </li>
             <li>
               <Link className="nav-item" exact to="/Start">Deal</Link>
             </li>
             </div>
           </ul>
         </nav>
         </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Switch>
           
           <Route exact path="/">
             <Home />
           </Route>
              
           <Route path="/start">
             <Start />
           </Route>
           <Route  path="/ViewOrder">
             <ViewOrder/>
            </Route>
            <Route  path="/PlaceOrder">
              <PlaceOrder/>
            </Route>
            <Route  path="/CancleOrder" component={CancleOrder}/>
             
           

           
         </Switch>
       </div>
   


    </Router>
  
</>
   )};

   export default App;
