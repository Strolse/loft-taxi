import React from "react";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Input, Button, InputLabel, Card, Typography, Grid, Stack,
    FormHelperText, Box, FormControl, CardMedia
} from "@mui/material";
import { saveCardAction } from "../../../redux/actions";
import cardLogo from "./card-logo.png"
import cardSign from "./card-sign.png"
import cardCircle from "./card-circle.png"
import moment from "moment";


const ProfileForm = ({ auth, user, saveCardAction }) => {
    const { control, register,
        formState: {
            errors, isValid, isSubmitted
        },
        handleSubmit,
        reset,
        watch
    } = useForm({
        mode: "onChange",
        defaultValues: {
            name: user.dataCard.cardName,
            date: user.dataCard.expiryDate && new Date(user.dataCard.expiryDate) || null,
            card: user.dataCard.cardNumber,
            cvc: user.dataCard.cvc
        }
    });

    const saveCard = async (data) => {

        const { name, date, card, cvc } = data;
        await saveCardAction(card, date, name, cvc, auth.token);
        reset();
    }

    const InputDate = ({ value, onClick }) => {

        return (
            <FormControl variant="standard">
                <InputLabel htmlFor="date" shrink>MM/YY</InputLabel>
                <Input
                    placeholder="05/08"
                    id="date"
                    inputProps={{ "data-testid": "date" }}
                    value={value}
                    onClick={onClick}
                />
            </FormControl>)
    }

    return !isSubmitted ? (
        <Box component="form" data-testid="form"
            onSubmit={handleSubmit(saveCard)}
            sx={{
                display: "flex", flexDirection: "column",
                alignItems: "center", padding: "44px 5%"
            }}>
            <Typography component="h1" variant="h4">Профиль</Typography>
            <p>Введите платежные данные</p>
            <Grid container spacing={7}>
                <Grid item xs={12} sm={6} md={6} sx={{ mb: "40px", display: 'grid' }}>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="name">Имя владельца</InputLabel>
                        <Input {...register('name', {
                            required: "Введите имя"
                        })}
                            placeholder="Loft"
                            id="name" />
                        <FormHelperText error component="div">
                            {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
                        </FormHelperText>
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="card">Номер карты</InputLabel>
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
                            type="number" placeholder="5545  2300  3432  4521"
                            id="card" />
                        <FormHelperText error component="div">
                            {errors?.card && <p>{errors?.card?.message || "Error!"}</p>}
                        </FormHelperText>
                    </FormControl>
                    <Stack direction="row" spacing={3}>
                        <FormControl variant="standard">
                            <Controller control={control}
                                name="date"
                                rules={{
                                    required: true
                                }}
                                render={({ field: { onChange, value, ...field } }) => (
                                    <DatePicker
                                        {...field}
                                        selected={value}
                                        onChange={(e) => onChange(e)}
                                        dateFormat="MM/yy"
                                        minDate={new Date()}
                                        showMonthYearPicker
                                        customInput={<InputDate />
                                        }
                                    />
                                )} />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="cvc">CVC</InputLabel>
                            <Input {...register('cvc', {
                                required: "Введите cvc"
                            })}
                                type="text" placeholder="667" name="cvc" required
                                id="cvc" />
                            <FormHelperText error component="div">
                                {errors?.cvc && <p>{errors?.cvc?.message || "Error!"}</p>}
                            </FormHelperText>
                        </FormControl>
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
                            <Typography
                                component='p'>
                                {watch('date') !== null && moment(new Date(watch('date'))).format('MM/YY')
                                    || <FormHelperText error component="div">
                                        Поле MM/YY не запонено
                                    </FormHelperText>}
                            </Typography>
                        </Box>
                        <Typography
                            component='p'>{watch('card') || user.dataCard.cardNumber}
                        </Typography>
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
            <Button type="submit" disabled={!isValid}
                sx={{ width: "353px", mt: "10px" }}>
                Сохранить</Button>
        </Box>
    ) : (
        <Box sx={{
            display: "flex", flexDirection: "column",
            alignItems: "center", padding: "70px 20px"
        }}>
            <Typography component="h1" variant="h4">Профиль</Typography>
            <Box component="p" sx={{ mb: "28px" }}>
                Платёжные данные обновлены. Теперь вы можете заказывать такси.</Box>
            <Button component={Link} sx={{ width: "353px" }} to="/order">
                Перейти на карту</Button>
        </Box>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { saveCardAction })(ProfileForm);