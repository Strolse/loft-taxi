import React from "react";

const Login = (props)=>{
    const openPage = props.openPage;
    return (
        <div>
            <h2>Войти</h2>
            <form >
                <label htmlFor="">
                    Email
                    <input type="text" placeholder="mail@mail.ru" name="" id="" />
                </label>
                <label htmlFor="">
                    Пароль
                    <input type="password" placeholder="*************"/>
                </label>
                <button onClick={()=>{openPage('map')}} type="submit">Войти</button>
                <div>
                    Новый пользователь?
                    <button onClick={()=>{openPage('registration')}}>Зарегистрируйтесь</button>
                </div>
            </form>
        </div>
    )
}

export default Login;