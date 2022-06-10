import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadAdressesAction, getRouteAction } from "../redux/actions";
import { Autocomplete, TextField } from "@mui/material"


const OrderForm = ({ user, order, loadAdressesAction, getRouteAction }) => {
    const [selectedFrom, setSelectedFrom] = useState(null);
    const [selectedTo, setSelectedTo] = useState(null);

    useEffect(() => {
        if (user.dataCard.cardName) {
            loadAdressesAction();
        }
        
    }, [])

    function onSubmit(e){
        e.preventDefault();
        if(selectedFrom && selectedTo){
            getRouteAction(selectedFrom, selectedTo)
        }
    }

    return (
        <div>
            {user.dataCard.cardName ?
                (
                    <form onSubmit={onSubmit}>
                        <Autocomplete
                            onChange={(event, value) => setSelectedFrom(value)}
                            disablePortal
                            id="combo-box-demo"
                            options={order.addresses.filter(name => name !== selectedTo)}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Откуда" />
                            }
                        />
                        <Autocomplete
                            onChange={(event, value) => setSelectedTo(value)}
                            disablePortal
                            id="combo-box-demo"
                            options={order.addresses.filter(name => name !== selectedFrom)}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Куда" />
                            }
                        />
                        <button >Заказать</button>
                    </form>
                ) : (
                    <div>
                        <h2>Заполните платежные данные</h2>
                        <p>
                            Укажите информацию о банковской карте, чтобы сделать заказ.
                        </p>
                        <Link to="/profile" >Перейти в профиль</Link>
                    </div>
                )
            }
        </div>
    )

}
const mapStateToProps = state => state;

export default connect(mapStateToProps, { loadAdressesAction, getRouteAction })(OrderForm);