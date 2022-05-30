import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Input } from "@material-ui/core";
import Header from "./Header";
import { saveCardAction } from "../actions";

const Profile = ({ auth, saveCardAction }) => {
    

    return (
        <div>
            <Header />
            <h2>Профиль</h2>
            <p>Ввдеите платежные данные</p>
            <form >
                <label htmlFor="name">Имя владельца</label>
                <Input type="name" placeholder="Loft" name="name" id="name" />
                <label htmlFor="card">Номер карты</label>
                <Input type="number" placeholder="5545  2300  3432  4521" name="card" id="card" />
                <label htmlFor="data">MM/YY</label>
                <Input type="text" placeholder="05/08" name="data" id="data" />
                <label htmlFor="cvc">CVC</label>
                <Input type="text" placeholder="667" name="cvc" id="cvc" />
                <Button type="submit">Сохранить</Button>
            </form>
        </div>
    )

}

// Profile.propTypes = {
//     openPage: PropTypes.func
// }

const mapStateToProps = state => state;

export default connect(mapStateToProps, {saveCardAction})(Profile);