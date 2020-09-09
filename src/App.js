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
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        databaseURL: process.env.REACT_APP_databaseURL,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId,
        measurementId: process.env.REACT_APP_measurementId
    };

    firebase.initializeApp(firebaseConfig);

    const signUpUser = (email, password) => {
        console.log(email, " ", password);
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
        signInUser(email, password);


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
            {console.log("ENV: ", process.env)}
            <div>
                <NavBar />
                <Route exact path="/Glitched-React/homepage" component={Homepage} />
                <Route exact path="/Glitched-React/messages" component={Messages} />
                <Route exact path="/Glitched-React/admin" component={Admin} />
                <Route exact path="/Glitched-React/login" component={Login} />
                <Route exact path="/Glitched-React/signup" render={
                    (props) => (
                        <SignUp signUpUser={signUpUser}/>
                )}/>


            </div>
        </Router>
    );
}

export default App;