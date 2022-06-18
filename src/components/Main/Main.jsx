import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Box, Typography, Button } from "@mui/material";
import Header from "./Header";
import Map from "./Map";
import OrderForm from "./OrderForm";
import Profile from "./Profile";


const Main = ({ user, pageType }) => {

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
                        {user.dataCard.cardName && user.dataCard.expiryDate ?
                            <OrderForm />
                            : (
                                <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center" }}>
                                    <Typography component="h1" variant="h5" >
                                        Заполните платежные данные</Typography>
                                    <p>
                                        Укажите информацию о банковской карте, чтобы сделать заказ.
                                    </p>
                                    <Button component={Link} sx={{width:"353px"}} to="/profile" >
                                        Перейти в профиль</Button>
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