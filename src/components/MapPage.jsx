import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Map from "./Map";


const MapPage = ({openPage})=>{
    return (
        <div>
            <Header openPage={openPage}/>
            <Map/>
        </div>
    )
}

MapPage.propTypes = {
    openPage: PropTypes.func
}

export default MapPage;