import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import PropTypes from "prop-types";
// import { Input, Button, Link } from "@mui/material";
import { Button, Input } from "@material-ui/core";

const Login = ({openPage}) => {
    const { login} = useContext(AuthContext);

    const logIn = (e) => {
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        login(email, password);
    };

    return (
        <div>
            <h2>Войти</h2>
            <form onSubmit={logIn}>
                <label htmlFor="email">Email</label>
                <Input type="email" placeholder="mail@mail.ru" name="email" id="email" />
                <label htmlFor="password">Пароль</label>
                <Input type="password" placeholder="*************" name="password" id="password" />
                <Button type="submit">Войти</Button>
            </form>
            <div>
                Новый пользователь?
                <Button onClick={() => { openPage('registration') }}>Зарегистрируйтесь</Button>
            </div>
        </div>
    )
}

Login.propTypes = {
    openPage: PropTypes.func
}

export default Login;

