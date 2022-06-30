import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Input, InputLabel, FormHelperText, Box, Typography, FormControl, Stack, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { registerAction } from "../../redux/actions";

const RegistrationForm = ({ registerAction }) => {
    const { register,
        formState: {
            errors, isValid
        },
        handleSubmit
    } = useForm({
        mode: "onChange"
    });

    const logIn = (data) => {
        const { email, name, password } = data;
        const surname = name;
        registerAction(email, password, name, surname);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(logIn)}
            sx={{ display: "grid" }}>
            <Typography component="h1" variant="h4"
                sx={{ mb: "57px", textAlign:"center" }}>
                Регистрация</Typography>
            <Stack spacing={3} >
                <FormControl variant="standard">
                    <InputLabel htmlFor="email" shrink>Email*</InputLabel>
                    <Input {...register('email', {
                        required: "Введите email",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                            message: "Введите корректный адрес электронной почты"
                        }
                    })}
                        placeholder="mail@mail.ru"
                        id="email"
                    />
                    <FormHelperText error component="div">
                        {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                    </FormHelperText>
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="name" shrink>Как вас зовут?*</InputLabel>
                    <Input {...register('name', {
                        required: "Введите имя"
                    })}
                        placeholder="Петр Александрович"
                        id="name"
                    />
                    <FormHelperText error component="div">
                        {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
                    </FormHelperText>
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="password" shrink>Пароль*</InputLabel>
                    <Input {...register('password', {
                        required: "Придумайте пароль"
                    })}
                        type="password" placeholder="Придумайте пароль*"
                        id="password"
                    />
                    <FormHelperText error component="div">
                        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                    </FormHelperText>
                </FormControl>
            </Stack>
            <Button type="submit" disabled={!isValid}
                sx={{ mt: "78px", mb: "33px" }}>
                Зарегистрироваться</Button>
            <Box sx={{textAlign:"center"}}>
                Уже зарегистрированы?   
                <Link component={RouterLink} sx={{color:"#FDBF5A", ml:"5px"}} to="/login" >Войти</Link>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { registerAction })(RegistrationForm);