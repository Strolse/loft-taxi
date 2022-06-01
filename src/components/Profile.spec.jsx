import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react"
import Profile from "./Profile";
import { saveCardAction } from "../actions";




jest.mock("./Header", () => {
    const Header = () => <div>Header component</div>
    return Header
});

describe("Profile component", () => {


    it("renders correctly", () => {
        const mockStore = {
            getState: () => (
                {
                    user: {
                        dataCard: {
                            cardName: "",
                            expiryDate: "",
                            cardNumber: "",
                            cvc: ""
                        }
                    }
                }
            ),
            subscribe: () => { },
            dispatch: () => { }
        }

        const { container } = render(
            <Provider store={mockStore}>
                <Profile />
            </Provider>
        );
        expect(container.innerHTML).toMatch("Header component")
    }
    )
})

// Не понимаю, в чем причина ошибки
// Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate.
// React limits the number of nested updates to prevent infinite loops.