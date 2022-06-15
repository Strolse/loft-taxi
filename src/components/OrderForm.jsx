import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadAdressesAction, getRouteAction, emptyCoordsAction } from "../redux/actions";
import { useForm, Controller } from "react-hook-form";
import { Autocomplete, TextField, Button, Box, Grid, Typography } from "@mui/material"


const OrderForm = ({ order, loadAdressesAction, getRouteAction, emptyCoordsAction }) => {
    const { control,
        formState: {
            isValid
        },
        handleSubmit,
        reset,
        watch

    } = useForm({
        mode: "onChange",
    });

    useEffect(() => {
        loadAdressesAction();
    }, [])

    function onSubmit(data) {
        const { selectedFrom, selectedTo } = data;
        getRouteAction(selectedFrom, selectedTo);
        reset();
    }

    return !order.isOrdered ?  (
                        <Box component="form" onSubmit={handleSubmit(onSubmit)}
                            sx={{ display: "grid" }}>
                            <Controller
                                control={control}
                                name="selectedFrom"
                                rules={{ required: true }}
                                render={({ field: { onChange } }) => (
                                    <Autocomplete
                                        onChange={(event, value) => { onChange(value) }}
                                        options={order.addresses.filter(name => name !== watch("selectedTo"))}

                                        renderInput={(params) => <TextField {...params} variant="standard" label="Откуда" />
                                        }
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="selectedTo"
                                rules={{ required: true }}
                                render={({ field: { onChange } }) => (
                                    <Autocomplete
                                        onChange={(event, value) => { onChange(value) }}
                                        sx={{mb:"23px"}}
                                        options={order.addresses.filter(name => name !== watch("selectedFrom"))}

                                        renderInput={(params) => <TextField {...params} variant="standard" label="Куда" />
                                        }
                                    />
                                )}
                            />
                            <Button type="submit" disabled={!isValid}>Заказать</Button>
                        </Box>
                    ) : (
                        <Box sx={{ display: "grid" }}>
                            <Typography component="h1" variant="h5">Заказ размещен</Typography>
                            <p>
                                Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                            </p>
                            <Button onClick={() => { emptyCoordsAction() }}>Сделать новый заказ</Button>
                        </Box>
                    )
                

    

}
const mapStateToProps = state => state;

export default connect(mapStateToProps, { loadAdressesAction, getRouteAction, emptyCoordsAction })(OrderForm);