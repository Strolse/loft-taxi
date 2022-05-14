import React from "react";
import Header from "./Header";

const Registration = (props)=>{
    const openPage = props.openPage;
    return (
        <div>
            <Header openPage={openPage}/>
            <h2>Регистрация</h2>
            <form>
                <label htmlFor="">
                    Email*
                    <input type="email" placeholder="mail@mail.ru" name="" id="" />
                </label>
                <label htmlFor="">
                    Как вас зовут?*
                    <input type="text" placeholder="Петр Александрович" name="" id="" />
                </label>
                <label htmlFor="">
                    Пароль
                    <input type="password" placeholder="Придумайте пароль*"/>
                </label>
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