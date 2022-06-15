import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AppBar, Toolbar, Box, Stack, Link, MenuItem, MenuList, Tabs, Tab } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { logoutAction } from "../redux/actions";
import logo from "./Main/logo.png"

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
                            onClick={() => { logoutAction(); localStorage.clear() }}>
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