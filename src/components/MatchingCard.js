import React from "react";



function MatchCard(props) {
  return (


    <div className="user__card">
      <div className="user__card__top blue">
        <h6 style={{textAlign: "center", color:"white", marginBottom: "0px"}}>
        <i className="fas fa-gamepad"></i> Player 2 Found <i className="fas fa-heart"></i>
        </h6>
        <br></br>
        <div className="user__card__img" style={{ marginBottom: "0px"}}>
          <img src={props.image} className="card-circle-img" alt="..." />

        </div>
        <h3 className="user__card__name">{props.name}</h3>
      </div>
      <div className="user__card__btm">
        <br></br>
        <p className="user__card__we">Age: {props.age}
        </p>

        <p className="user__card__we">
          <i className="fas fa-map-marker-alt"></i> {props.location}</p>

        <p className="user__card__we">{props.description}</p>

      </div>
    </div>


  )
}

export default MatchCard;