import React, { useRef, useState } from "react";
import DisplayImage from "../DisplayImage";
import "../assets/homepage.scss"

function UserInfo(props) {

  const fname = useRef();
  const lname = useRef();
  const city = useRef();
  const state = useRef();
  const zip = useRef();
  const gender = useRef();
  const preference = useRef();
  const [img, setImg] = useState("");

  const [formState, setFormState] = useState({
    fname: null,
    lname: null,
    city: null,
    state: null,
    zip: null,
    gender: null,
    preference: null,
    likes: {
      anime: null,
      videogames: null,
      comics: null,
      tabletop: null
    }
  })

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormState({
      ...formState,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault()
    let tempLikes = {};
    Object.keys(formState.likes).forEach(like => {
      if(formState.likes[like] === null) {
        tempLikes[like] = props[like];
      } else {
        tempLikes[like] = formState.likes[like];
      }
    })
    props.setUserLikes(tempLikes.anime, tempLikes.videogames, tempLikes.comics, tempLikes.tabletop);
    if (img.type) {
      props.storeBlob(
        fname.current.value,
        lname.current.value,
        city.current.value,
        state.current.value,
        zip.current.value,
        gender.current.value,
        preference.current.value,
        img
      )
    } else {
      props.setUserInfo({
        fname: fname.current.value,
        lname: lname.current.value,
        city: city.current.value,
        state: state.current.value,
        zip: zip.current.value,
        gender: gender.current.value,
        preference: preference.current.value,
        url: props.profile_picture
      })
    }
  }

  function handleCheckBoxChange(event) {
    const { name } = event.target;

    setFormState({
      ...formState,
      likes: {
        ...formState.likes,
        [name]: !formState.likes[name]
      }
    });
  }

  return (
    <div className="mx-auto card" style={{ margin: "40px", maxWidth: "500px" }}>
      <div className="col-md-6 mb-3 mx-auto">
        <DisplayImage currentImg={props.profile_picture} setImg={setImg} ></DisplayImage>
      </div>
      <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault01">First name</label>
            <input type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="Jane"
              ref={fname}
              name="fname"
              value={formState.fname || props.first_name || ""}
              onChange={handleInputChange}
              required></input>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault02">Last name</label>
            <input type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Doe"
              ref={lname}
              name="lname"
              value={formState.lname || props.last_name || ""}
              onChange={handleInputChange}
              required />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03">City</label>
            <input type="text"
              className="form-control"
              placeholder="Savannah"
              id="validationDefault03"
              ref={city}
              name="city"
              value={formState.city || props.city || ""}
              onChange={handleInputChange}
              required />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault04">State</label>
            <select className="custom-select"
              id="validationDefault04"
              ref={state}
              name="state"
              value={formState.state || props.state || ""}
              onChange={handleInputChange}
              required
              style={{ overflow: "hidden" }}>
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
              id="validationDefault05"
              ref={zip}
              name="zip"
              value={formState.zip || props.zip || ""}
              onChange={handleInputChange}
              required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault04">I Am....</label>
            <select className="custom-select"
              id="validationDefault04"
              ref={gender}
              name="gender"
              value={formState.gender || props.gender || ""}
              onChange={handleInputChange}
              required
              style={{ overflow: "hidden" }}>
              <option disabled value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-Binary</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault04">Looking for....</label>
            <select className="custom-select"
              id="validationDefault04"
              ref={preference}
              name="preference"
              value={formState.preference || props.preference || ""}
              onChange={handleInputChange}
              required
              style={{ overflow: "hidden" }}>
              <option disabled value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-Binary</option>
              <option>Not Specific</option>
            </select>
          </div>
          <div className="col-md-3 mb-3" style={{ textAlign: "center" }}>
            <i className="fas fa-dragon"></i>
            <br></br>
            Anime
            <br></br>
            <input type="checkbox" id="anime" onChange={handleCheckBoxChange} checked={(formState.likes.anime !== null) ? formState.likes.anime : props.anime} name="anime" />
          </div>
          <div className="col-md-3 mb-3" style={{ textAlign: "center" }}>
            <i className="fas fa-gamepad"></i>
            <br></br>
            Video Games
            <br></br>
            <input type="checkbox" id="videogames" name="videogames" onChange={handleCheckBoxChange} checked={(formState.likes.videogames !== null) ? formState.likes.videogames : props.videogames} />
          </div>
          <div className="col-md-3 mb-3" style={{ textAlign: "center" }}>
            <i className="fas fa-mask"></i>
            <br></br>
            Comic Books
            <br></br>
            <input type="checkbox" id="comics" name="comics" onChange={handleCheckBoxChange} checked={(formState.likes.comics !== null) ? formState.likes.comics : props.comics} />
          </div>

          <div className="col-md-3 mb-3" style={{ textAlign: "center" }}>
            <i className="fas fa-dice"></i>
            <br></br>
            Table Top
            <br></br>
            <input type="checkbox" id="tabletop" name="tabletop" onChange={handleCheckBoxChange} checked={(formState.likes.tabletop !== null) ? formState.likes.tabletop : props.tabletop} />
          </div>

        </div>
        <button className="btn btn-info mx-auto">Confirm Info</button>
      </form>
    </div>
  )
}

export default UserInfo;