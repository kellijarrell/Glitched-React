import React from "react";
import {  BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from  "./components/pages/Homepage";
import Admin from  "./components/pages/Admin";
import Messages from "./components/pages/Messages";
import "./components/assets/all-pages-style.css";
import Login from "./components/pages/Login";

function App(){
    return(
        <Router>
        <div>
            <NavBar />
            <Route exact path = "/homepage" component={Homepage}/>
            <Route exact path = "/messages" component={Messages}/>
            <Route exact path = "/admin" component={Admin}/>
            <Route exact path = "/login" component={Login}/>


        </div>
        </Router>
    );
}

export default App;