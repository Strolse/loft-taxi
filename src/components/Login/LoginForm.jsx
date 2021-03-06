import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { Input, Button, InputLabel, Typography, Link, FormControl, FormHelperText, Box, Stack } from "@mui/material";
import { authenticateAction } from "../../redux/actions";


const LoginForm = ({ authenticateAction }) => {

    const { register,
        formState: {
            errors, isValid
        },
        handleSubmit
    } = useForm({
        mode: "onChange"
    });

    const logIn = async (data) => {
        const { email, password } = data;
        await authenticateAction(email, password);
    }

    return (
        <Box component="form" data-testid="form" onSubmit={handleSubmit(logIn)}
            sx={{ display: "grid" }}>
            <Typography component="h1" variant="h4"
                sx={{ mb: "57px", textAlign:"center" }}>
                Войти</Typography>
            <Stack spacing={3} >
                <FormControl variant="standard"  >
                    <InputLabel htmlFor="email"  shrink>Email</InputLabel>
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
                <FormControl variant="standard" >
                    <InputLabel shrink htmlFor="password">Пароль</InputLabel>
                    <Input {...register('password', {
                        required: "Введите пароль"
                    })} type="password"
                    placeholder="*************" id="password"
                    />
                    <FormHelperText error component="div">
                        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                    </FormHelperText>
                </FormControl>
            </Stack>
            <Button type="submit" disabled={!isValid}
                sx={{ mt: "78px", mb: "33px" }}>
                Войти</Button>
            <Box sx={{textAlign:"center"}}>
                Новый пользователь?
                <Link component={RouterLink} sx={{color:"#FDBF5A", ml:"5px"}}
                    data-testid="reg-link" to="/registration">Зарегистрируйтесь</Link>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps, { authenticateAction })(LoginForm);

