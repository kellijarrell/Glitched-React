import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/pages/Homepage";
import Admin from "./components/pages/Admin";
import Messages from "./components/pages/Messages";
import "./components/assets/all-pages-style.css";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp"
import UserInfo from "./components/pages/UserInfo";
import Matching from "./components/pages/Matching";

const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
require("firebase/storage")


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

    const storage = firebase.storage();
    let currentUser;

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            currentUser = user;
            const userId = user.uid;
            firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
                const userData = snapshot.val();
                if (userData === null) {
                    initializeUser(user.email)
                }
            });
        } else {
            // No user is signed in.
        }
    });

    const signUpUser = (email, password) => {
        console.log(email, " ", password);
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

    }

    const initializeUser = (email) => {
        firebase.database().ref('users/' + currentUser.uid).set({
            email: email,
        });
    }

    const createUserInfo = (fname, lname, city, state, zip, gender, preference, imageUrl) => {
        firebase.database().ref('users/' + currentUser.uid).set({
            first_name: fname,
            last_name: lname,
            city: city,
            state: state,
            zip: zip,
            gender: gender,
            preference: preference,
            profile_picture: imageUrl
        });

    }

    const signInUser = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    const storeImage = (img) => {

    }

    return (
        <Router>
            <div>
                <NavBar />
                <Route exact path="/Glitched-React/homepage" component={Homepage} />
                <Route exact path="/Glitched-React/matched" component={Matching} />
                <Route exact path="/Glitched-React/userinfo" render={
                    (props) => (
                        <UserInfo storage={storeImage} createUserInfo={createUserInfo} />
                    )} />
                <Route exact path="/Glitched-React/messages" component={Messages} />
                <Route exact path="/Glitched-React/admin" component={Admin} />
                <Route exact path="/Glitched-React/login" render={
                    (props) => (
                        <Login signInUser={signInUser} />
                    )} />
                <Route exact path="/Glitched-React/signup" render={
                    (props) => (
                        <SignUp signUpUser={signUpUser} />
                    )} />


            </div>
        </Router>
    );
}

export default App;