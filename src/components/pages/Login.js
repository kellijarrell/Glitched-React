import React from "react";
import "../assets/login.css";


function Login() {

    return (
        <div className="container mx-auto" style={{ margin: "40px", maxWidth: "500px" }}>

            <form>

                <div className="form-group">

                    <input type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    placeholder="Email" 
                    style={{ backgroundColor: "#71cae3" }} />
                </div>

                <div className="form-group">


                    <input type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password" 
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
                <button type="submit" className="btn btn-info" style={{ marginBottom: "20px" }}>
                    Login
                </button>


            </form>

        </div>



    )
}

export default Login;