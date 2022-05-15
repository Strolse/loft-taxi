import React from "react";
import Header from "./Header";

const Registration = (props)=>{
    const openPage = props.openPage;
    return (
        <div>
            <Header openPage={openPage}/>
            <h2>Регистрация</h2>
            <form>
                <label htmlFor="email">Email*</label>
                <input type="email" placeholder="mail@mail.ru" name="email" id="email" />
                <label htmlFor="name">Как вас зовут?*</label>
                <input type="text" placeholder="Петр Александрович" name="name" id="name" />
                <label htmlFor="password">Пароль</label>
                <input type="password" placeholder="Придумайте пароль*" name="password" id="password"/>
                <button type="submit" onClick={()=>{openPage('map')}}>Зарегистрироваться</button>
                <div>
                    Уже зарегистрирован?
                    <button onClick={()=>{openPage('map')}} type="submit">Войти</button>
                </div>
            </form>
        </div>
    )

}

export default Registration;