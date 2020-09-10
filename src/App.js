import React, { useState } from "react";
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

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const [currentUser, setCurrentUser] = useState({});
    const [currentUserInfo, setCurrentUserInfo] = useState({ first_name: null });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setCurrentUser(user);
            const userId = user.uid;
            firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
                const userData = snapshot.val();
                if (userData === null) {
                    initializeUser(user.email)
                } else {
                    if (JSON.stringify(currentUserInfo) !== JSON.stringify(userData)) { setCurrentUserInfo(userData) };
                }
            });
        } else {
            // No user is signed in.
        }
    });

    const signUpUser = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

    }

    const initializeUser = (email) => {
        firebase.database().ref('users/' + currentUser.uid).set({
            email: email
        });
    }

    const setUserInfo = (fname, lname, city, state, zip, gender, preference, url) => {
        firebase.database().ref('zip/').child(currentUser.uid).remove();
        firebase.database().ref('users/' + currentUser.uid).set({
            email: currentUser.email,
            first_name: fname,
            last_name: lname,
            city: city,
            state: state,
            zip: zip,
            gender: gender,
            preference: preference,
            profile_picture: url
        });
        firebase.database().ref('zip/' + gender + "/prefers_" + preference + "/" + currentUser.uid).set({
            likes: "anime"
        });
    }

    const storeBlob = (fname, lname, city, state, zip, gender, preference, blob) => {
        const storageRef = firebase.storage().ref();
        const ref = storageRef.child("users/" + currentUser.uid);
        ref.put(blob).then(function () {
            ref.getDownloadURL().then(function (url) {
                setUserInfo(fname, lname, city, state, zip, gender, preference, url);
            });
        });
    }

    const signInUser = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
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
                <Route exact path="/Glitched-React/matched" component={Matching} />
                <Route exact path="/Glitched-React/userinfo" render={
                    (props) => (
                        <UserInfo {...currentUserInfo} storeBlob={storeBlob} setUserInfo={setUserInfo} />
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