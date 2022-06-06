import React from "react";
import Header from "./Header";
import Map from "./Map";
import OrderForm from "./OrderForm";
import { serverRoute } from "../asyncActions/api";


const MapPage = ()=>{


    return (
        <div>
            <Header/>
            <Map/>
            <OrderForm/>
        </div>
    )
}


export default MapPage;