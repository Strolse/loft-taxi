import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react"
import Main from "./Main";
import configureStore from 'redux-mock-store'

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock("./Map", () => {
    const Map = () => <div>Map component</div>
    return Map
});

jest.mock("./Header", () => {
    const Header = () => <div>Header component</div>
    return Header
});

jest.mock("./Profile", () => {
    const Profile = () => <div>Profile component</div>
    return Profile
});

jest.mock("./OrderForm", () => {
    const OrderForm = () => <div>OrderForm component</div>
    return OrderForm
});

describe("Main component", () => {

    it("renders correctly, when opens Profile", () => {
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

        const { container } = render(
            <Provider store={store}>
                <Main pageType="profile" />
            </Provider>
        );
        expect(container.innerHTML).toMatch("Map component");
        expect(container.innerHTML).toMatch("Header component");
        expect(container.innerHTML).toMatch("Profile component");
    })

    it("renders correctly, when opens Map with OrderForm", () => {
        const initialState = {
            user: {
                dataCard: {
                    cardNumber: "",
                    expiryDate: "",
                    cardName: "Olya",
                    cvc: ""
                }
            }
        };
        const store = mockStore(initialState);

        const { container } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Main pageType="order" />
                </MemoryRouter>
            </Provider>
        );
        expect(container.innerHTML).toMatch("Map component");
        expect(container.innerHTML).toMatch("Header component");
        expect(container.innerHTML).toMatch("OrderForm component");
    })
    it("renders correctly, when opens Map without OrderForm", () => {
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

        const { container } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Main pageType="order" />
                </MemoryRouter>
            </Provider>
        );
        expect(container.innerHTML).toMatch("Map component");
        expect(container.innerHTML).toMatch("Header component");
        expect(container.innerHTML).toMatch("Заполните платежные данные");
    })
})