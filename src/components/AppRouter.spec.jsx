import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

const mockStore = {
    getState: () => {return{auth: {isLoggedIn: true}}},
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

jest.mock("./Profile", ()=>{
    const Profile = ()=><div>Profile component</div>
    return Profile
});

jest.mock("./Main", ()=>{
    const Main = ()=><div>Main component</div>
    return Main
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

    it("renders correctly with Profile component", () => {
        const {container} = render(
            <Provider store={mockStore}>
                <MemoryRouter initialEntries={['/profile']}>
                    <AppRouter />
                </MemoryRouter>
            </Provider>
        );
        expect(container.innerHTML).toMatch("Profile component");
    })

    it("renders correctly with Main component", () => {
        const {container} = render(
            <Provider store={mockStore}>
                <MemoryRouter initialEntries={['/map']}>
                    <AppRouter />
                </MemoryRouter>
            </Provider>
        );
        expect(container.innerHTML).toMatch("Main component");
    })

})