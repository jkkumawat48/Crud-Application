import React, {useState} from "react"
import './App.css'; 
import Profile from './Profile';
import Login from "./Screen/Login/Login";
import Create from './Component/Create';
import Crud from './Component/Crud';
import "bootstrap/dist/css/bootstrap.css";
import CrudApp from "./Component/CrudApp";
import Page from "./Component/Page";
function App() {
 function getData(){
  alert("Heloo props data")
 }
  return (
    <div className="App">
      <Page/>
    </div>
  );
}

export default App;
