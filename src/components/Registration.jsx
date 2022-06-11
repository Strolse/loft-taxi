import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Input, FormLabel, FormHelperText } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { registerAction } from "../redux/actions";

const Registration = ({ isLoggedIn, registerAction }) => {
    const { register,
        formState: {
            errors, isValid
        },
        handleSubmit
    } = useForm({
        mode: "onChange"
    });

    let navigate = useNavigate();

    const logIn = (data) => {
        const {email, name, password} = data;
        const surname = name;
        registerAction(email, password, name, surname);
    };

    if (isLoggedIn) {
        navigate("/map");
    }

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit(logIn)}>
                <FormLabel htmlFor="email">Email*</FormLabel>
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
                <FormLabel htmlFor="name">Как вас зовут?*</FormLabel>
                <Input {...register('name', {
                    required: "Введите имя"
                })}
                    placeholder="Петр Александрович"
                />
                <FormHelperText error component="div">
                    {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
                </FormHelperText>
                <FormLabel htmlFor="password">Пароль</FormLabel>
                <Input {...register('password', {
                    required: "Введите пароль"
                })}
                    type="password" placeholder="Придумайте пароль*"
                />
                <FormHelperText error component="div">
                    {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                </FormHelperText>

                <Button type="submit" disabled={!isValid}>Зарегистрироваться</Button>
            </form>

            <div>
                Уже зарегистрирован?
                <Link to="/login" >Войти</Link>
            </div>
        </div>
    )

}

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { registerAction })(Registration);