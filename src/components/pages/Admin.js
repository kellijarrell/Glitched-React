import React from "react";
import kelli from "../assets/images/kelli.jpg";
import "../assets/admin.css"
import AdminCard from "../AdminCard"

function Admin() {
    return (
        <div className= "container">
       <AdminCard
       userImage={kelli}
       userName = "Kelli Jarrell"
       description = "Anime, Video Games, All Things Nerdy "
       />
    
       </div>


    )
}

export default Admin;