import React from "react";
import { render } from "@testing-library/react"
import Main from "./Main";

// jest.mock("./Map", ()=>({Map: () =><div>Map component</div>}));

jest.mock("./Map", () => {
    const Map = () => <div>Map component</div>
    return Map
});

jest.mock("./Header", () => {
    const Header = () => <div>Header component</div>
    return Header
});

jest.mock("./OrderForm", () => {
    const OrderForm = () => <div>OrderForm component</div>
    return OrderForm
});

describe("Main component", () => {

    it("renders correctly", () => {
        const { container } = render(
            <Main />
        );
        expect(container.innerHTML).toMatch("Map component");
        expect(container.innerHTML).toMatch("Header component");
        expect(container.innerHTML).toMatch("OrderForm component");

    }
    )
})


