import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";
import { AppBar, Button } from "@material-ui/core";

const Header = ({ openPage }) => {
    const { logout } = useContext(AuthContext);

    return (
        <div>
            <header>
                <AppBar position="static">
                    <nav>
                        <ul>
                            <li>
                                <Button onClick={() => { openPage('mapPage') }}>Карта</Button>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Button onClick={() => { openPage('profile') }}>Профиль</Button>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Button onClick={logout}>Выйти</Button>
                            </li>
                        </ul>
                    </nav>
                </AppBar>
            </header>
        </div>
    )
}

Header.propTypes = {
    openPage: PropTypes.func
}

export default Header;