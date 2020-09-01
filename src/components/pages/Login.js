import React from "react";
import "../assets/login.css"


function Login() {

    return (
        <div className="container mx-auto" style={{ margin: "40px", paddingRight: "100px", paddingLeft: "100px"}}>

            <form>

                <div className="form-group">

                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" style={{backgroundColor: "#71cae3"}} />
                </div>

                <div className="form-group">


                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{backgroundColor: "#71cae3"}}  />
                </div>

                <button type="submit" className="btn btn-info" style={{ marginBottom: "20px" }}>
                    Login
                </button>
            </form>

        </div>



    )
}

export default Login;