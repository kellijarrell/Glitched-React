import React, { useRef } from "react";
import DisplayImage from "../DisplayImage";

function UserInfo(props) {

  const fname = useRef();
  const lname = useRef();
  const city = useRef();
  const state = useRef();
  const zip = useRef();
  const password = useRef();

  return (
    <div className="container mx-auto" style={{ margin: "40px", maxWidth: "500px" }}>
      <div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault01">First name</label>
            <input type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="Jane" required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault02">Last name</label>
            <input type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Doe" required />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03">City</label>
            <input type="text"
              className="form-control"
              placeholder="Savannah"
              id="validationDefault03" required />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault04">State</label>
            <select className="custom-select" id="validationDefault04" required style={{ overflow: "hidden" }}>
              <option disabled value="">Choose...</option>
              <option>AL</option>
              <option>AK</option>
              <option>AZ</option>
              <option>AR</option>
              <option>CA</option>
              <option>CO</option>
              <option>CT</option>
              <option>DE</option>
              <option>FL</option>
              <option>GA</option>
              <option>HI</option>
              <option>ID</option>
              <option>IL</option>
              <option>IN</option>
              <option>IA</option>
              <option>KS</option>
              <option>KY</option>
              <option>LA</option>
              <option>ME</option>
              <option>MD</option>
              <option>MA</option>
              <option>MI</option>
              <option>MN</option>
              <option>MS</option>
              <option>MO</option>
              <option>MT</option>
              <option>NE</option>
              <option>NV</option>
              <option>NH</option>
              <option>NJ</option>
              <option>NM</option>
              <option>NY</option>
              <option>NC</option>
              <option>ND</option>
              <option>OH</option>
              <option>OK</option>
              <option>OR</option>
              <option>PA</option>
              <option>RI</option>
              <option>SC</option>
              <option>SD</option>
              <option>TN</option>
              <option>TX</option>
              <option>UT</option>
              <option>VT</option>
              <option>VA</option>
              <option>WA</option>
              <option>WV</option>
              <option>WI</option>
              <option>WY</option>
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault05">Zip</label>
            <input type="text"
              className="form-control"
              placeholder="31407"
              id="validationDefault05" required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault04">I Am....</label>
            <select className="custom-select" id="validationDefault04" required style={{ overflow: "hidden" }}>
              <option disabled value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-Binary</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault04">Looking for....</label>
            <select className="custom-select" id="validationDefault04" required style={{ overflow: "hidden" }}>
              <option disabled value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-Binary</option>
              <option>Not Specific</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <DisplayImage storage={props.storage}></DisplayImage>
          </div>
        </div>
        <button className="btn btn-info" 
        type="submit">Add Info</button>
      </div>
    </div>
  )
}

export default UserInfo;