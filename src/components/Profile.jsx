import React from "react";
import Header from "./Header";

const Profile = (props)=>{
    const openPage = props.openPage;
    return (
        <div>
            <Header openPage={openPage}/>
            <h2>Профиль</h2>
        </div>
    )

}

export default Profile;