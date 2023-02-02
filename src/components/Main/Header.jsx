import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AppBar, Toolbar, Box, Stack, Link } from "@mui/material";
import { logoutAction } from "../../redux/actions";
import logo from "./logo.png"

const Header = ({ logoutAction }) => {

    return (
        <div>
            <AppBar position="static" >
                <Toolbar sx={{ justifyContent: "space-between", py: 3 }}>
                    <Box component="img"
                        sx={{
                            width: 270,
                            height: 62
                        }}
                        src={logo}></Box>
                    <Stack direction="row" spacing={3}>
                        <Link component={RouterLink} to="/order">Карта</Link>
                        <Link component={RouterLink} to="/profile" >Профиль</Link>
                        <Link component={RouterLink} to="/login"
                            onClick={() => { logoutAction(); localStorage.clear(); this.location.reload() }}>
                            Выйти</Link>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}

// Header.propTypes = {
//     openPage: PropTypes.func
// }

export default connect(null, { logoutAction })(Header);