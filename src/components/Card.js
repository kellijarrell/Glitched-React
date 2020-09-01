import React from "react";



function Card(props) {
  return (

    // <div className="card mx-auto" style={{textAlign: "center"}}>
    //     <img src={props.image} style={{borderRadius: "25px 25px 0px 0px"}} className="card-img-top" alt="..." />
    //     <div className="card-body">
    //         <h3 className="card-title">{props.name}</h3>
    //         <p className="card-text">Age: {props.age}</p>
    //         <p className="card-text">{props.location}</p>
    //         <p className="card-text">{props.description}</p>
    //         <div style={{textAlign: "center"}} >
    //         <a href="#" className="btn btn-success circle-btn"style={{margin: "20px"}} ><i className="far fa-heart"></i></a>
    //         <a href="#" className="btn btn-danger circle-btn" style={{margin: "20px"}}><i className="fas fa-heart-broken"></i></a>
    //         </div>
    //     </div>
    // </div>


    <div className="user__card">
      <div className="user__card__top blue">
        <div className="user__card__img">
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
      <div className="user__card__choice m--reject">

      </div>
      <div className="user__card__choice m--like">

      </div>
      <div className="user__card__drag">

      </div>
    </div>

  )
}

export default Card;