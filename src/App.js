import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/pages/Homepage";
import Messages from "./components/pages/Messages";
import "./components/assets/all-pages-style.css";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp"
import UserInfo from "./components/pages/UserInfo";
import Matching from "./components/pages/Matching";
import ErrorPage from "./components/pages/404page";

const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
require("firebase/storage")

function App() {

    const origin = window.location.origin + "/Glitched-React";

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

    const auth = firebase.auth();
    const database = firebase.database();
    const storage = firebase.storage();

    const [currentUser, setCurrentUser] = useState();
    const [currentUserInfo, setCurrentUserInfo] = useState({ first_name: null });
    const [currentUserLikes, setCurrentUserLikes] = useState({
        anime: false,
        videogames: false,
        comics: false,
        tabletop: false
    })
    const [loginState, setLoginState] = useState("Welcome, please sign in.");
    
    const [startup, setStartup] = useState(false);
    auth.onAuthStateChanged(function (user) {
        if(startup === true && user === auth.currentUser) return;
        setStartup(true);
        if (user) {            
            setCurrentUser(user);
            const userId = user.uid;
            if (userId) {
                database.ref('/users/' + userId).once('value').then(function (snapshot) {
                    const userData = snapshot.val();
                    if (userData === null) {
                        // New user redirect
                        initializeUser(user.email)
                        window.location.href = origin + "/userinfo";
                    } else {
                        // Existing user redirect
                        if (userData.personal) {
                            if (JSON.stringify(currentUserInfo) !== JSON.stringify(userData)) {
                                setCurrentUserInfo(userData);
                                if(userData.likes) {
                                    setCurrentUserLikes(userData.likes);
                                }
                                setLoginState("Signed in as " + userData.personal.first_name + " " + userData.personal.last_name);
                            };
                        } else {
                            setLoginState("needs more info");
                        }
                    }
                });
            }
        } else {
            // No user is signed in.
            console.log("FALSE", user);
            if (window.location.href !== origin && window.location.href !== origin + "/SignUp") {
                window.location.href = origin;
            }
        }
    });

    const signUpUser = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

    }

    const initializeUser = (email) => {
        if (currentUser.uid) {
            database.ref('users/' + currentUser.uid).set({
                email: email
            });
        }
    }

    const setUserInfo = (fname, lname, city, state, zip, gender, preference, url) => {
        database.ref('zip/' + currentUserInfo.personal.zip + "/" + currentUserInfo.personal.gender + "/prefers_" + currentUserInfo.personal.preference + "/" + currentUser.uid).remove();
        database.ref('users/' + currentUser.uid + "/personal/").set({
            first_name: fname,
            last_name: lname,
            city: city,
            state: state,
            zip: zip,
            gender: gender,
            preference: preference,
            profile_picture: url
        });
        database.ref('zip/' + zip + "/" + gender + "/prefers_" + preference + "/" + currentUser.uid).set({
            id: currentUser.uid
        });
        window.location.href = window.location.origin + "/Glitched-React/";
    }

    const setUserLikes = (anime, videogames, comics, tabletop) => {
        database.ref('users/' + currentUser.uid + "/likes/").set({
            anime: anime,
            videogames: videogames,
            tabletop: tabletop,
            comics: comics
        });
    }
    const storeBlob = (fname, lname, city, state, zip, gender, preference, blob) => {
        const storageRef = storage.ref();
        const ref = storageRef.child("users/" + currentUser.uid);
        ref.put(blob).then(function () {
            ref.getDownloadURL().then(function (url) {
                setUserInfo(fname, lname, city, state, zip, gender, preference, url);
            });
        });
    }

    const signInUser = (email, password) => {
        auth.signInWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    const signOut = () => {
        auth.signOut().then(function () {
            // Sign-out successful.
            setLoginState("Welcome, please sign in");
            window.location.href = window.location.origin + "/Glitched-React";
        }).catch(function (error) {
            // An error happened.
            console.log(error);
        });
    }

    if (!currentUser) {
        return (
            <Router>
                <Route exact path="/Glitched-React/" render={
                    (props) => (
                        <Login signInUser={signInUser} />
                    )} />
                <Route exact path="/Glitched-React/signup" render={
                    (props) => (
                        <SignUp signUpUser={signUpUser} />
                    )} />
                <Route exact path="/Glitched-React/error" component={ErrorPage} />
            </Router >
        );
    } else if (!currentUserInfo) {
        return (
            <Router>
                <Route exact path="/Glitched-React/" render={
                    (props) => (
                        <UserInfo {...currentUserInfo.personal} {...currentUserLikes} storeBlob={storeBlob} setUserInfo={setUserInfo} setUserLikes={setUserLikes} />
                    )} />
                <Route exact path="/Glitched-React/error" component={ErrorPage} />
            </Router>
        );
    } else {
        return (
            <Router>
                <div>
                    <NavBar loginState={loginState} signOut={signOut} />
                    <Route exact path="/Glitched-React/" render={
                        (props) => (
                            <Homepage database={database} currentUserInfo={currentUserInfo} likes={currentUserLikes} />
                        )} />
                    <Route exact path="/Glitched-React/matched" component={Matching} />
                    <Route exact path="/Glitched-React/error" component={ErrorPage} />
                    <Route exact path="/Glitched-React/userinfo" render={
                        (props) => (
                            <UserInfo {...currentUserInfo.personal} {...currentUserLikes} storeBlob={storeBlob} setUserInfo={setUserInfo} setUserLikes={setUserLikes} />
                        )} />
                    <Route exact path="/Glitched-React/messages" component={Messages} />
                </div>
            </Router>
        );
    }
}

export default App;