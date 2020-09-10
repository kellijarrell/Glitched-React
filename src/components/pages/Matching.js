import React from "react";
import "../assets/homepage.scss";
import MatchCard from "../MatchingCard";
import anna from "../assets/images/anna.jpg";




function Matching() {

    var users = [
        {
            image: anna,
            name: "Annastasshia Ames",
            age: 32,
            location: "Savannah, GA",
            description: "Anime, Video Games, All Things Nerdy",
            profileUrl: "https://warm-badlands-80819.herokuapp.com/"
        }
    ]
    return (
        <div>


                    <div className="user">
                        <header className="user__header"></header>
                        <div className="user__content">
                            <div className="user__card-cont">

                                {users.map(user => (

                                    <MatchCard
                                        image={user.image}
                                        name={user.name}
                                        age={user.age}
                                        location={user.location}
                                        description={user.description}
                                        profileUrl={user.url}

                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

    )
}

export default Matching;