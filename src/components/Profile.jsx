import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

const Profile = ({openPage})=>{
    return (
        <div>
            <Header openPage={openPage}/>
            <h2>Профиль</h2>
        </div>
    )

}

Profile.propTypes = {
    openPage: PropTypes.func
}

export default Profile;