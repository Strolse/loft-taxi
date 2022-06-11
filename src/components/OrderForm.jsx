import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadAdressesAction, getRouteAction, emptyCoordsAction } from "../redux/actions";
import { useForm, Controller } from "react-hook-form";
import { Autocomplete, TextField, Button } from "@mui/material"


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

    return (
        <div>
            {!order.isOrdered ?
                (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            control={control}
                            name="selectedFrom"
                            rules={{ required: true }}
                            render={({ field: { onChange } }) => (
                                <Autocomplete
                                    onChange={(event, value) => { onChange(value) }}
                                    options={order.addresses.filter(name => name !== watch("selectedTo"))}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Откуда" />
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
                                    options={order.addresses.filter(name => name !== watch("selectedFrom"))}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Куда" />
                                    }
                                />
                            )}
                        />
                        <Button type="submit" disabled={!isValid}>Заказать</Button>
                    </form>
                ) : (
                    <div>
                        <h2>Заказ размещен</h2>
                        <p>
                            Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                        </p>
                        <Button onClick={() => { emptyCoordsAction() }}>Сделать новый заказ</Button>
                    </div>
                )
            }
        </div>
    )

}
const mapStateToProps = state => state;

export default connect(mapStateToProps, { loadAdressesAction, getRouteAction, emptyCoordsAction })(OrderForm);