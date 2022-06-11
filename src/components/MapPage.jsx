import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";
import Map from "./Map";
import OrderForm from "./OrderForm";
import { serverRegister } from "../asyncActions/api";


const MapPage = ({user}) => {
    // serverRegister("test5455@test.com", '000000')
    return (
        <div>
            <Header />
            <Map />
            {user.dataCard.cardName ?
            <OrderForm />
            :(
                <div>
                    <h2>Заполните платежные данные</h2>
                    <p>
                        Укажите информацию о банковской карте, чтобы сделать заказ.
                    </p>
                    <Link to="/profile" >Перейти в профиль</Link>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(MapPage);