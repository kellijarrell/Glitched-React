import React from "react";

function SignUp(props) {

  return (
    <div className="container mx-auto" style={{ margin: "40px", maxWidth: "500px" }}>
      <form>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationDefault01">Email</label>
            <input type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="Useremail@email.com" required />
          </div>
          <div className="col-md-6 mb-3">
            <label for="validationDefault02">Password</label>
            <input type="password"
              className="form-control"
              id="validationDefault02"
              placeholder="Password" required />
          </div>
        </div>
        
        <button className="btn btn-info" onClick={() => props.signUpUser} type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;