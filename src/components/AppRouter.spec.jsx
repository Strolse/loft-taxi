import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

const mockStore = {
    getState: () => {return{auth: {isLoggedIn: true}}},
    subscribe: () => { },
    dispatch: () => { }
}

jest.mock("./Login/Login.jsx", ()=>{
    const Login = ()=><div>Login component</div>
    return Login
});

jest.mock("./Main/Main.jsx", ()=>{
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
        expect(container.innerHTML).toMatch("Login component");
    })

    it("renders correctly with Profile component", () => {
        const {container} = render(
            <Provider store={mockStore}>
                <MemoryRouter initialEntries={['/profile']}>
                    <AppRouter />
                </MemoryRouter>
            </Provider>
        );
        expect(container.innerHTML).toMatch("Main component");
    })

    it("renders correctly with Main component", () => {
        const {container} = render(
            <Provider store={mockStore}>
                <MemoryRouter initialEntries={['/order']}>
                    <AppRouter />
                </MemoryRouter>
            </Provider>
        );
        expect(container.innerHTML).toMatch("Main component");
    })
})