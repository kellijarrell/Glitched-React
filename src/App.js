import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/pages/Homepage";
import Admin from "./components/pages/Admin";
import Messages from "./components/pages/Messages";
import "./components/assets/all-pages-style.css";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp"

const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

function App() {

    const firebaseConfig = {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        databaseURL: process.env.databaseURL,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId
    };

    firebase.initializeApp(firebaseConfig);

    const signUpUser = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    const signInUser = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
    }

    return (
        <Router>
            <div>
                <NavBar />
                <Route exact path="/Glitched-React/homepage" component={Homepage} />
                <Route exact path="/Glitched-React/messages" component={Messages} />
                <Route exact path="/Glitched-React/admin" component={Admin} />
                <Route exact path="/Glitched-React/login" component={Login} />
                <Route exact path="/Glitched-React/signup" component={SignUp} />


            </div>
        </Router>
    );
}

export default App;