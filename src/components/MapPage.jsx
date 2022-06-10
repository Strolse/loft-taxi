import React from "react";
import Header from "./Header";
import Map from "./Map";
import OrderForm from "./OrderForm";
import { serverRegister } from "../asyncActions/api";


const MapPage = () => {
    // serverRegister("test5455@test.com", '000000')
    return (
        <div>
            <Header />
            <Map />
            <OrderForm />
        </div>
    )
}


export default MapPage;