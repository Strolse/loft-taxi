import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Box} from "@mui/material";
import { authenticateAction } from "../redux/actions";
import logo from "./Login/logo.png"
import bg from "./Login/bg.jpg"
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Login = ({ isLoggedIn, formType }) => {
    let navigate = useNavigate();

    if (isLoggedIn) {
        navigate("/order");
    }

    return (
        <Grid container component="main" sx={{ height: "100vh" }}>
            <Grid item
                xs={12} sm={4} md={4}
                sx={{
                    backgroundColor: "#1C1A19",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Box component="img"
                    sx={{
                        width: 192,
                        height: 228
                    }}
                    src={logo}></Box>
            </Grid>
            <Grid item xs={12} sm={8} md={8}
                sx={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Box sx={{
                    width: '60%',
                    py: 7,
                    px: "10%",
                    backgroundColor: "#fff",
                    borderRadius: "20px"
                }}>
                    {formType==="login" && <LoginForm />}
                    {formType==="registration" && <RegistrationForm />}
                </Box>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps, { authenticateAction })(Login);