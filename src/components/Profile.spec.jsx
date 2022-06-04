import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react"
import Profile from "./Profile";
import configureStore from 'redux-mock-store'


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

jest.mock("./Header", () => {
    const Header = () => <div>Header component</div>
    return Header
});

describe("Profile component", () => {

    it("renders correctly", () => {

        const { container } = render(
            <Provider store={store}>
                <Profile />
            </Provider>
        );
        expect(container.innerHTML).toMatch("Header component")
    }
    )
})
