import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input, Button, InputLabel, Typography, Grid, FormControl, FormHelperText, Box } from "@mui/material";
import Header from "./Header";
import { saveCardAction } from "../redux/actions";

const Profile = ({ auth, user, saveCardAction }) => {
    const { register,
        formState: {
            errors, isValid, isSubmitted
        },
        handleSubmit
    } = useForm({
        mode: "onChange",
        defaultValues: {
            name: user.dataCard.cardName,
            date: user.dataCard.expiryDate,
            card: user.dataCard.cardNumber,
            cvc: user.dataCard.cvc
        }
    });
    console.log(isSubmitted, "1")
    const saveCard = async (data) => {
        const { name, date, card, cvc } = data;

        await saveCardAction(card, date, name, cvc, auth.token);
    }

    return (
        <div>
            <Header />
            {!isSubmitted ?
                (<> <h2>Профиль</h2>
                    <p>Введите платежные данные</p>
                    <form onSubmit={handleSubmit(saveCard)}>
                        <InputLabel htmlFor="name">Имя владельца</InputLabel>
                        <Input {...register('name', {
                            required: "Введите имя"
                        })}
                            placeholder="Loft" />
                        <FormHelperText error component="div">
                            {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
                        </FormHelperText>
                        <InputLabel htmlFor="card">Номер карты</InputLabel>
                        <Input {...register('card', {
                            required: "Введите номер карты",
                            minLength: {
                                value: 16,
                                message: "В номере карты 16 цифр"
                            },
                            maxLength: {
                                value: 16,
                                message: "В номере карты 16 цифр"
                            }
                        })}
                            type="number" placeholder="5545  2300  3432  4521" />
                        <FormHelperText error component="div">
                            {errors?.card && <p>{errors?.card?.message || "Error!"}</p>}
                        </FormHelperText>
                        <InputLabel htmlFor="date">MM/YY</InputLabel>
                        <Input {...register('date', {
                            required: "Введите дату"
                        })}
                            placeholder="05/08" />
                        <FormHelperText error component="div">
                            {errors?.date && <p>{errors?.date?.message || "Error!"}</p>}
                        </FormHelperText>
                        <InputLabel htmlFor="cvc">CVC</InputLabel>
                        <Input {...register('cvc', {
                            required: "Введите cvc"
                        })}
                            type="text" placeholder="667" name="cvc" required id="cvc" />
                        <FormHelperText error component="div">
                            {errors?.cvc && <p>{errors?.cvc?.message || "Error!"}</p>}
                        </FormHelperText>
                        <Button type="submit" disabled={!isValid}>Сохранить</Button>
                    </form>
                </>

                ) : (
                    <div>
                        <h2>Профиль</h2>
                        <p>Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
                        <Link to="/map">Перейти на карту</Link>
                    </div>
                )
            }
        </div>)
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { saveCardAction })(Profile);