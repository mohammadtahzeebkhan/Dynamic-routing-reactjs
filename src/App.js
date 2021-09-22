import logo from './logo.svg';
import React from "react"
import './App.css';
import {BrowserRouter as Router , Link,Route} from "react-router-dom"
import User from "./Users.js"
function App() {
  let users=[
  { rollno:1,name:'tahzeeb', branch:"cse"},
  {rollno:2,name:'khan', branch:"ec"},
  {rollno:3,name:'paradise', branch:"it"},
  {rollno:4,name:'hope', branch:"me"},
  ]
  return (


    <div className="App">
    <h1>React js Dynamic Routing </h1>
    <Router>
     {
      users.map((item)=>
      
        <div><Link to={"/user/"+item.name}>{item.name}</Link></div>
      )
     }
     <Route path="/user/:rollno"><User/></Route>
     </Router>
    </div>
  );
}

export default App;
