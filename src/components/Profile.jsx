import React from "react";
import { connect } from "react-redux";
import { Button, Input } from "@material-ui/core";
import Header from "./Header";
import { saveCardAction } from "../redux/actions";

const Profile = ({ auth, user, saveCardAction }) => {
    let savedCardName = "";
    let savedExpiryDate = "";
    let savedCardNumber = "";
    let savedCvc = "";

    if(user.dataCard !== null){
    savedCardName = user.dataCard.cardName;
    savedExpiryDate = user.dataCard.expiryDate;
    savedCardNumber = user.dataCard.cardNumber;
    savedCvc = user.dataCard.cvc;
    }

    const saveCard = async (e) => {
        e.preventDefault();

        const cardName = e.target.name.value;
        const expiryDate = e.target.date.value;
        const cardNumber = e.target.card.value;
        const cvc = e.target.cvc.value;

        await saveCardAction(cardNumber, expiryDate, cardName, cvc, auth.token);
    }

    return (
        <div>
            <Header />
            <h2>Профиль</h2>
            <p>Введите платежные данные</p>
            <form onSubmit={saveCard}>
                <label htmlFor="name">Имя владельца</label>
                <Input type="name" placeholder="Loft" name="name" required id="name" defaultValue={savedCardName} />
                <label htmlFor="card">Номер карты</label>
                <Input type="number" placeholder="5545  2300  3432  4521" name="card" required id="card" defaultValue={savedCardNumber} />
                <label htmlFor="date">MM/YY</label>
                <Input type="text" placeholder="05/08" name="date" required id="date" defaultValue={savedExpiryDate} />
                <label htmlFor="cvc">CVC</label>
                <Input type="text" placeholder="667" name="cvc" required id="cvc" defaultValue={savedCvc} />
                <Button type="submit">Сохранить</Button>
            </form>
        </div>
    )

}


const mapStateToProps = state => state;

export default connect(mapStateToProps, { saveCardAction })(Profile);