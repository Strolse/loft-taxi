import React from "react";
import { connect } from "react-redux";
import { Input, Button, InputLabel, Modal, Typography, Grid, FormControl, FormHelperText, Box, Paper } from "@mui/material";
import { saveCardAction } from "../redux/actions";
import ProfileForm from "./ProfileForm";

const Profile = () => {

    return (
        <Grid container sx={{
            background: 'linear-gradient(0deg, rgba(28, 26, 25, 0.5), rgba(28, 26, 25, 0.5))',
            position: "absolute", bottom: 0, top: "110px",
            display: "flex", justifyContent: "center", alignItems: 'center'
        }}>
            <Grid item component={Paper} xs={12} sm={6} md={6}>
                <ProfileForm />
            </Grid>
        </Grid>)
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { saveCardAction })(Profile);