import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/login.css";
import logo from "../assets/images/glitched-logo.svg"

function Login(props) {

    const email = useRef();
    const password = useRef();

    return (
        <div className="mx-auto card" style={{ margin: "40px", maxWidth: "500px", backgroundColor: "#71cae3", borderRadius: "10px" }}>

            <div style={{ margin: "20px 20px 0px 20px" }}>

                <div style={{textAlign: "center", margin: "20px"}}>
                <h1 style={{color: "white"}}>Welcome To</h1>
                    <img src={logo}
                        className="mx-auto"
                        style={{maxWidth: "200px", margin: "10px"}}>
                    </img>
                    <h5 style={{color: "white"}}>Please Sign in to find your player 2!</h5>

                </div>
                <div className="form-group" >



                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"
                        ref={email} />
                </div>

                <div className="form-group">


                    <input type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        ref={password} />

                </div>
                <div className="row">
                    <a href="" style={{ color: "white" }}>
                        <p className="col">
                            Forgot Password?</p>
                    </a>
                    <a href="/Glitched-React/SignUp" style={{ color: "white" }}>
                        <p className="col">
                            New User? Sign Up Here!</p>
                    </a>
                </div>
                <Link to="/Glitched-React/" >
                    <button type="submit" className="btn btn-outline-light"
                        onClick={() => props.signInUser(email.current.value, password.current.value)} style={{ marginBottom: "20px" }}>
                        Login
                </button>
                </Link>


            </div>

        </div>



    )
}

export default Login;