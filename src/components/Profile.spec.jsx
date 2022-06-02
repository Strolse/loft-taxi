import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react"
import Profile from "./Profile";
import { saveCardAction } from "../actions";


// saveCardAction = jest.fn();

jest.mock("./Header", () => {
    const Header = () => <div>Header component</div>
    return Header
});

describe("Profile component", () => {


    it("renders correctly", () => {
        const mockStore = {
            getState: () =>
                {return{
                    auth: {isLoggedIn: true},
                    user: {
                        dataCard: {
                            cardNumber: "",
                            expiryDate: "",
                            cardName: "",
                            cvc: ""
                        }
                    }
                }},
            subscribe: () => { },
            dispatch: () => { }
        }

        const { container } = render(
            <Provider store={mockStore}>
                <Profile />
            </Provider>
        );
        screen.debug();
        expect(container.innerHTML).toMatch("Header component")
    }
    )
})

// Не понимаю, в чем причина ошибки
// Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate.
// React limits the number of nested updates to prevent infinite loops.