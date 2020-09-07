import React from "react";
import "../assets/homepage.scss";
import "../assets/hompage-script";
import Card from "../Card";
import anna from "../assets/images/anna.jpg";
import taylour from "../assets/images/taylour.jpg";
import kelli from "../assets/images/kelli.jpg";




function Homepage() {

    var users = [
        {
            image: anna,
            name: "Annastasshia Ames",
            age: 32,
            location: "Savannah, GA",
            description: "Anime, Video Games, All Things Nerdy",
            profileUrl: "https://warm-badlands-80819.herokuapp.com/"
        },
        {
            image: kelli,
            name: "Kelli Jarrell",
            age: 27,
            location: "Savannah, GA",
            description: "Anime, Video Games, All Things Nerdy",
            profileUrl: "https://warm-badlands-80819.herokuapp.com/"
        },
        {
            image: taylour,
            name: "Taylour Maggart",
            age: 35,
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

                                    <Card
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

export default Homepage;