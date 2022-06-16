import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Input, InputLabel, FormHelperText, Box, Typography, FormGroup, Stack } from "@mui/material";
import { Link } from "react-router-dom";
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
                sx={{ mb: "57px" }}>
                Регистрация</Typography>
            <Stack spacing={3} >
                <FormGroup>
                    <InputLabel htmlFor="email">Email*</InputLabel>
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
                </FormGroup>
                <FormGroup>
                    <InputLabel htmlFor="name">Как вас зовут?*</InputLabel>
                    <Input {...register('name', {
                        required: "Введите имя"
                    })}
                        placeholder="Петр Александрович"
                    />
                    <FormHelperText error component="div">
                        {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
                    </FormHelperText>
                </FormGroup>
                <FormGroup>
                    <InputLabel htmlFor="password">Пароль</InputLabel>
                    <Input {...register('password', {
                        required: "Введите пароль"
                    })}
                        type="password" placeholder="Придумайте пароль*"
                    />
                    <FormHelperText error component="div">
                        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                    </FormHelperText>
                </FormGroup>
            </Stack>
            <Button type="submit" disabled={!isValid}
                sx={{ mt: "78px", mb: "33px" }}>
                Зарегистрироваться</Button>
            <div>
                Уже зарегистрирован?
                <Link to="/login" >Войти</Link>
            </div>
        </Box>
    )
}

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { registerAction })(RegistrationForm);