import React from "react";
import Header from "./Header";

const Map = (props)=>{
    const openPage = props.openPage;
    return (
        <div>
            <Header openPage={openPage}/>
            <h2>Карта</h2>
        </div>
    )

}

export default Map;