import React, { useRef } from "react";
import "../assets/login.css";

function Login(props) {

    const email = useRef();
    const password = useRef();

    return (
        <div className="container mx-auto" style={{ margin: "40px", maxWidth: "500px" }}>

            <div>

                <div className="form-group">

                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"
                        ref={email}
                        style={{ backgroundColor: "#71cae3" }} />
                </div>

                <div className="form-group">


                    <input type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        ref={password}
                        style={{ backgroundColor: "#71cae3" }} />

                </div>
                <div className="row">
                    <a href="" style={{ color: "black" }}>
                        <p className="col" style={{ textShadow: "2px 2px 2px #71cae3" }}>
                            Forgot Password?</p>
                    </a>
                    <a href="/Glitched-React/SignUp" style={{ color: "black" }}>
                        <p className="col" style={{ textShadow: "2px 2px 2px #71cae3" }}>
                            New User? Sign Up Here!</p>
                    </a>
                </div>
                <button type="submit" className="btn btn-info" onClick={() => props.signInUser(email.current.value, password.current.value)} style={{ marginBottom: "20px" }}>
                    Login
                </button>


            </div>

        </div>



    )
}

export default Login;