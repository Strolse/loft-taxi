import React from "react";

const Header = (props)=>{
    const openPage = props.openPage;
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <button onClick={()=>{openPage('map')}}>Карта</button>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <button onClick={()=>{openPage('profile')}}>Профиль</button>    
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <button onClick={()=>{openPage('login')}}>Выйти</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        
    )

}

export default Header;