import React from "react";
import Card from "./Card";

function UserBox(props) {

  return (
    <div>
      {Object.keys(props.users).map(id => {
        return ( 
        <Card 
          key = {id}
          user = {props.users[id].personal}
          likes = {props.users[id].likes}
        />)
      })}
    </div>
  )
}

export default UserBox;