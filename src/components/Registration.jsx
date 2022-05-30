import React from "react";
import PropTypes from "prop-types";

import { Button, Input, FormLabel } from "@material-ui/core";
import { Link } from "react-router-dom";

const Registration = () => {

    const logIn = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={logIn}>
                <FormLabel htmlFor="email">Email*</FormLabel>
                <Input type="email" placeholder="mail@mail.ru" name="email" id="email" />
                <FormLabel htmlFor="name">Как вас зовут?*</FormLabel>
                <Input type="text" placeholder="Петр Александрович" name="name" id="name" />
                <FormLabel htmlFor="password">Пароль</FormLabel>
                <Input type="password" placeholder="Придумайте пароль*" name="password" id="password" />
                <Button type="submit">Зарегистрироваться</Button>
            </form>

            <div>
                Уже зарегистрирован?
                <Link to="/login" >Войти</Link>
            </div>
        </div>
    )

}



export default Registration;