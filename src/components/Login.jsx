import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, InputLabel, Typography, Grid, FormControl, FormHelperText, Box, Paper } from "@mui/material";
import { authenticateAction } from "../redux/actions";
import logo from "../pages/Login/logo.png"
import bg from "../pages/Login/bg.jpg"

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
                    <Box component="form" onSubmit={handleSubmit(logIn)}
                        sx={{ display: "grid" }}>
                        <Typography component="h1" variant="h4"
                            sx={{ mb: "57px" }}>
                            Войти</Typography>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input {...register('email', {
                            required: "Введите email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                                message: "Введите корректный адрес электронной почты"
                            }
                        })}
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
                        <Button type="submit" disabled={!isValid}
                            sx={{ mt: "78px", mb: "33px" }}>
                            Войти</Button>
                        <div>
                            Новый пользователь?
                            <Link data-testid="reg-link" to="/registration">Зарегистрируйтесь</Link>
                        </div>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps, { authenticateAction })(Login);

