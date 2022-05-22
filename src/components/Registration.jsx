import React, {useContext} from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";
import { Button, Input, FormLabel } from "@material-ui/core";

const Registration = ({openPage}) => {
    const {login } = useContext(AuthContext);
    const logIn = (e) => {
        e.preventDefault();
        login('test@mail.ru', '123');
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
                <Button onClick={() => { openPage('login') }} >Войти</Button>
            </div>
        </div>
    )

}

Registration.propTypes = {
    openPage: PropTypes.func
}

export default Registration;