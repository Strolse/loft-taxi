import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AppBar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { logoutAction } from "../redux/actions";

const Header = ({logoutAction}) => {

    return (
        <div>
            <header>
                <AppBar position="static">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/map">Карта</Link>

                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/profile" >Профиль</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/login" onClick={()=>{logoutAction()}}>Выйти</Link>
                            </li>
                        </ul>
                    </nav>
                </AppBar>
            </header>
        </div>
    )
}

// Header.propTypes = {
//     openPage: PropTypes.func
// }

export default connect(null, {logoutAction})(Header);