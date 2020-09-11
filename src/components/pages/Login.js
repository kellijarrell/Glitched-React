import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/login.css";

function Login(props) {

    const email = useRef();
    const password = useRef();

    return (
        <div className="mx-auto card" style={{ margin: "40px", maxWidth: "500px" }}>

            <div style={{margin: "20px 20px 0px 20px"}}>

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
                    <a href="" style={{ color: "black" }}>
                        <p className="col">
                            Forgot Password?</p>
                    </a>
                    <a href="/Glitched-React/SignUp" style={{ color: "black" }}>
                        <p className="col">
                            New User? Sign Up Here!</p>
                    </a>
                </div>
                <Link to = {"/Glitched-React/homepage"} >
                <button type="submit" className="btn btn-info" 
                onClick={() => props.signInUser(email.current.value, password.current.value)} style={{ marginBottom: "20px" }}>
                    Login
                </button>
                </Link>


            </div>

        </div>



    )
}

export default Login;