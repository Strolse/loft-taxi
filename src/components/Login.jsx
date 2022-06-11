import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, InputLabel, Typography, Grid, FormControl, FormHelperText, Box } from "@mui/material";
import { authenticateAction } from "../redux/actions";


const Login = ({ authenticateAction, isLoggedIn }) => {

    const { register,
        formState: {
            errors, isValid
        },
        handleSubmit
    } = useForm({
        mode: "onChange"
    });

    let navigate = useNavigate();
    const logIn = async (data) => {
        console.log(data)

        const { email, password } = data;
        await authenticateAction(email, password);
    }

    if (isLoggedIn) {
        navigate("/map");
    }

    return (
        <Grid container>
            <Grid item xs={4} ></Grid>
            <Grid item xs={8} >
                <Typography variant="h2">Войти</Typography>
                <Box component="form" onSubmit={handleSubmit(logIn)}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input {...register('email', {
                        required: "Введите email",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                            message: "Введите корректный адрес электронной почты"
                        }})}
                        placeholder="mail@mail.ru"
                    />
                    <FormHelperText error component="div">
                        {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                    </FormHelperText>
                    <InputLabel htmlFor="password">Пароль</InputLabel>
                    <Input {...register('password', {
                        required: "Введите пароль"
                    })} type="password" placeholder="*************" id="password" 
                    />
                    <FormHelperText error component="div">
                        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                    </FormHelperText>
                    <Button type="submit" disabled={!isValid}>Войти</Button>
                </Box>
                <div>
                    Новый пользователь?
                    <Link data-testid="reg-link" to="/registration">Зарегистрируйтесь</Link>
                </div>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps, { authenticateAction })(Login);

