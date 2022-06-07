import React from "react";
import { connect } from "react-redux";
import { Button, Input, FormLabel } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { registerAction } from "../redux/actions";

const Registration = ({isLoggedIn, registerAction}) => {
    let navigate = useNavigate();
    const logIn = (e) => {
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const name=e.target.name.value;
        const surname=e.target.name.value;
        registerAction(email, password, name, surname);
    };

    if(isLoggedIn){
        navigate("/map");
    }

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={logIn}>
                <FormLabel htmlFor="email">Email*</FormLabel>
                <Input type="email" placeholder="mail@mail.ru" name="email" required id="email" />
                <FormLabel htmlFor="name">Как вас зовут?*</FormLabel>
                <Input type="text" placeholder="Петр Александрович" name="name" required id="name" />
                <FormLabel htmlFor="password">Пароль</FormLabel>
                <Input type="password" placeholder="Придумайте пароль*" name="password" required id="password" />
                <Button type="submit">Зарегистрироваться</Button>
            </form>

            <div>
                Уже зарегистрирован?
                <Link to="/login" >Войти</Link>
            </div>
        </div>
    )

}

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, {registerAction})(Registration);