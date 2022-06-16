import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import OrderForm from "./OrderForm";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("OrderForm", () => {
  it("renders correctly, when an order is not implemented", () => {
    const initialState = {
      order: {
        isOrdered: false,
        addresses: [1, 2]
      }
    };
    const store = mockStore(initialState);

    const { queryByText, getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <OrderForm />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText('Заказать')).toBeInTheDocument();
    expect(queryByText('Сделать новый заказ')).not.toBeInTheDocument();
  })

  it("renders correctly, when an order is implemented", () => {
    const initialState = {
      order: {
        isOrdered: true,
        addresses: [1, 2]
      }
    };
    const store = mockStore(initialState);

    const { queryByText, getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <OrderForm />
        </MemoryRouter>
      </Provider>
    );

    expect(queryByText('Заказать')).not.toBeInTheDocument();
    expect(getByText('Сделать новый заказ')).toBeInTheDocument();
  })
})
