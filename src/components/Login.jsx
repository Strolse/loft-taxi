import React from "react";

const Login = (props)=>{
    const openPage = props.openPage;
    return (
        <div>
            <h2>Войти</h2>
            <form >
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="mail@mail.ru" name="email" id="email" />
                <label htmlFor="password">Пароль</label>                 
                <input type="password" placeholder="*************" name="password" id="password"/>
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