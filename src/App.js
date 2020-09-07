import React from "react";
import {  BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from  "./components/pages/Homepage";
import Admin from  "./components/pages/Admin";
import Messages from "./components/pages/Messages";
import "./components/assets/all-pages-style.css";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp"

function App(){
    return(
        <Router>
        <div>
            <NavBar />
            <Route exact path = "/Glitched-React/homepage" component={Homepage}/>
            <Route exact path = "/Glitched-React/messages" component={Messages}/>
            <Route exact path = "/Glitched-React/admin" component={Admin}/>
            <Route exact path = "/Glitched-React/login" component={Login}/>
            <Route exact path = "/Glitched-React/signup" component={SignUp}/>


        </div>
        </Router>
    );
}

export default App;