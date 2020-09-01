import React from "react";



function AdminCard(props) {
  return (

    <div className="card mx-auto" style={{ width: "18rem" }}>
      <img src={props.userImage} className="card-img-top circle-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.userName}</h5>
        <p className="card-text">{props.description}
          <a href="#" >
            <i className="far fa-edit"></i>
          </a>
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>


  )
}

export default AdminCard;