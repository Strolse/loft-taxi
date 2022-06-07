import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import OrderForm from "./OrderForm";


const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
    user: {
        dataCard: {
            cardNumber: "",
            expiryDate: "",
            cardName: "",
            cvc: ""
        }
    }
};
const store = mockStore(initialState);

describe("OrderForm", () => {

  it("renders correctly", () => {

    const { queryByText, getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <OrderForm />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText('Заполните платежные данные')).toBeInTheDocument();
    expect(queryByText('Заказать')).not.toBeInTheDocument();
  })

})
