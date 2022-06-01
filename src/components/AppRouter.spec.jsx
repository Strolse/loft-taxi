import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

const mockStore = {
    getState: () => { },
    subscribe: () => { },
    dispatch: () => { }
}

jest.mock("./Login", ()=>{
    const Login = ()=><div>Login component</div>
    return Login
});
jest.mock("./Registration", ()=>{
    const Registration = ()=><div>Registration component</div>
    return Registration
});

describe("AppRouter", () => {
    it("renders correctly", () => {
        const {container} = render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <AppRouter />
                </MemoryRouter>
            </Provider>
        );
        expect(container.innerHTML).toMatch("Login component");
    });

    it("renders correctly with Registration component", () => {
        const {container} = render(
            <Provider store={mockStore}>
                <MemoryRouter initialEntries={['/registration']}>
                    <AppRouter />
                </MemoryRouter>
            </Provider>
        );
        expect(container.innerHTML).toMatch("Registration component");
    })

})