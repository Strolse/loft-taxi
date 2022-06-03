import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { Input, Button, Link } from "@mui/material";
import { Button, Input } from "@material-ui/core";


import { authenticateAction } from "../redux/actions";



const Login = ({authenticateAction}) => {
    

    let navigate = useNavigate();
    const logIn = async (e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
  
        await authenticateAction(email, password);

        navigate("/map");
    }


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
                <Link data-testid="reg-link" to="/registration">Зарегистрируйтесь</Link>
            </div>
        </div>
    )
}


export default connect(null, {authenticateAction})(Login);

