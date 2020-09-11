import React, { useEffect, useState } from "react";
import "../assets/homepage.scss";
import "../assets/hompage-script";
import UserBox from "../UserBox";

function Homepage(props) {

    const [matches, setMatches] = useState([]);
    const [users, setUsers] = useState({});
    const [usersRetrieved, setUsersRetrieves] = useState(0);

    const getUsers = (userIds) => {
        userIds.forEach(userId => {
            const userRef = props.database.ref("users/" + userId);
            const tempObj = users;
            userRef.on('value', function (snapshot) {
                tempObj[userId] = snapshot.val();
                setUsers(tempObj);
                setUsersRetrieves(true);
            })
        })

    }

    const getMatches = () => {
        setTimeout(()=>{if (props.currentUserInfo.personal === undefined) setUsersRetrieves(usersRetrieved+1)}, 50);
        if(usersRetrieved === "stop") return;
        if (props.currentUserInfo.personal) {
            const matchesRef = props.database.ref("zip/" + props.currentUserInfo.personal.zip + "/" + props.currentUserInfo.personal.preference + "/prefers_" + props.currentUserInfo.personal.gender);
            matchesRef.on('value', function (snapshot) {
                const snapArray = Object.keys(snapshot.val()).map(key => {
                    return snapshot.val()[key];
                });
                const tempArray = [];
                snapArray.forEach(user => {
                    tempArray.push(user.id);
                })
                setMatches(tempArray);
                getUsers(tempArray);
                setUsersRetrieves("stop");
            });
        }
    }

    useEffect(() => {
        getMatches();
    }, [usersRetrieved]);

    return (
        <div>
            <div className="user">
                <header className="user__header"></header>
                <div className="user__content">
                    <div className="user__card-cont">
                        <UserBox users={users} matches={matches}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Homepage;