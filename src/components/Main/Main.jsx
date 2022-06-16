import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Box, Typography } from "@mui/material";
import Header from "./Header";
import Map from "./Map";
import OrderForm from "./OrderForm";
import Profile from "./Profile";


const Main = ({ user, pageType }) => {
    // serverRegister("test5455@test.com", '000000')
    return (
        <Box >
            <Header />
            <Map />
            {pageType === "order" &&
                <Grid position="absolute" container sx={{ mt: "60px", ml: "5%", pointerEvents: "none" }}>
                    <Grid item xs={11} sm={6} md={4}
                        sx={{
                            backgroundColor: "#fff",
                            padding: "25px",
                            borderRadius: "10px",
                            pointerEvents: "auto"
                        }}>
                        {user.dataCard.cardName ?
                            <OrderForm />
                            : (
                                <Box sx={{ display: "grid" }}>
                                    <Typography component="h1" variant="h5">Заполните платежные данные</Typography>
                                    <p>
                                        Укажите информацию о банковской карте, чтобы сделать заказ.
                                    </p>
                                    <Link to="/profile" >Перейти в профиль</Link>
                                </Box>
                            )}
                    </Grid>
                </Grid>}
            {pageType === "profile" && <Profile />}
        </Box>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Main);