import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input, Button, InputLabel, Card, Typography, Grid, Stack, FormHelperText, Box, FormGroup, CardContent, CardMedia } from "@mui/material";
import { saveCardAction } from "../redux/actions";
import cardLogo from "./Main/ProfileForm/card-logo.png"
import cardSign from "./Main/ProfileForm/card-sign.png"
import cardCircle from "./Main/ProfileForm/card-circle.png"



const ProfileForm = ({ auth, user, saveCardAction }) => {
    const { register,
        formState: {
            errors, isValid, isSubmitted
        },
        handleSubmit,
        watch
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

    return !isSubmitted ? (
        <Box component="form" onSubmit={handleSubmit(saveCard)}
            sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "44px 5%" }}>
            <Typography component="h1" variant="h4">Профиль</Typography>
            <p>Введите платежные данные</p>
            <Grid container spacing={7}>
                <Grid item xs={12} sm={6} md={6} sx={{ mb: "40px" }}>
                    <FormGroup>
                        <InputLabel htmlFor="name">Имя владельца</InputLabel>
                        <Input {...register('name', {
                            required: "Введите имя"
                        })}
                            placeholder="Loft" />
                        <FormHelperText error component="div">
                            {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
                        </FormHelperText>
                    </FormGroup>
                    <FormGroup>
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
                    </FormGroup>
                    <Stack direction="row" spacing={3}>
                        <FormGroup>
                            <InputLabel htmlFor="date">MM/YY</InputLabel>
                            <Input
                                {...register('date', {
                                    required: "Введите дату"
                                })}
                                placeholder="05/08"
                            />
                            <FormHelperText error component="div">
                                {errors?.date && <p>{errors?.date?.message || "Error!"}</p>}
                            </FormHelperText>
                        </FormGroup>
                        <FormGroup>
                            <InputLabel htmlFor="cvc">CVC</InputLabel>
                            <Input {...register('cvc', {
                                required: "Введите cvc"
                            })}
                                type="text" placeholder="667" name="cvc" required id="cvc" />
                            <FormHelperText error component="div">
                                {errors?.cvc && <p>{errors?.cvc?.message || "Error!"}</p>}
                            </FormHelperText>
                        </FormGroup>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={6}
                    sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Card sx={{
                        width: "348px", height: "182px",
                        padding: "18px 16px 18px 28px",
                        display: "flex", flexDirection: "column", justifyContent: "space-between"
                    }}>

                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <CardMedia
                                component="img"
                                image={cardLogo}
                                sx={{ width: "34px", height: "34px" }}
                            />
                            <Typography component='p'>{watch('date') || user.dataCard.expiryDate}</Typography>
                        </Box>
                        <Typography component='p'>{watch('card') || user.dataCard.cardNumber}</Typography>

                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <CardMedia
                                component="img"
                                image={cardSign}
                                sx={{ width: "29px", height: "26px" }}
                            />
                            <CardMedia
                                component="img"
                                image={cardCircle}
                                sx={{ width: "28px", height: "28px" }}
                            />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            <Button type="submit" disabled={!isValid} sx={{ width: "353px" }}>
                Сохранить</Button>
        </Box>

    ) : (
        <div>
            <h2>Профиль</h2>
            <p>Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
            <Link to="/order">Перейти на карту</Link>
        </div>
    )

}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { saveCardAction })(ProfileForm);