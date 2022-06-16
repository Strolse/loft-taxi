import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, act } from "@testing-library/react";
import LoginForm from "./LoginForm";


const mockStore = {
    getState: () => ({ auth: {} }),
    subscribe: () => { },
    dispatch: () => { }
}

describe("LoginForm", () => {

    it("renders correctly", () => {
        const { getByText, getByLabelText } = render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <LoginForm />
                </MemoryRouter>
            </Provider>
        );
        expect(getByLabelText('Пароль')).toBeInTheDocument();
        expect(getByText('Новый пользователь?')).toBeInTheDocument();
    })

    describe("with invalid inputs", () => {

        it("renders the validation errors", async () => {

            const { getByLabelText, container, getByRole } = render(
                <Provider store={mockStore}>
                    <MemoryRouter>
                        <LoginForm />
                    </MemoryRouter>
                </Provider>
            );

            const emailInput = getByLabelText('Email');
            const passwordInput = getByLabelText('Пароль');

            await act(async () => {
                fireEvent.change(emailInput, { target: { value: "invalidemail" } })
                fireEvent.change(passwordInput, { target: { value: "j" } })
                fireEvent.change(passwordInput, { target: { value: "" } })
            })
            expect(container.innerHTML).toMatch("Введите корректный адрес электронной почты")
            expect(container.innerHTML).toMatch("Введите пароль")
            expect(getByRole('button')).toHaveAttribute("disabled")
        })
    })

    describe("with valid inputs", () => {
        it("deleted disabled from the button", async () => {

            const { getByRole, getByLabelText } = render(
                <Provider store={mockStore}>
                    <MemoryRouter>
                        <LoginForm />
                    </MemoryRouter>
                </Provider>
            ); 

            const emailInput = getByLabelText('Email');
            const passwordInput = getByLabelText('Пароль');

            await act(async () => {
                fireEvent.change(emailInput, { target: { value: "test@mail.ru" } })
                fireEvent.change(passwordInput, { target: { value: "testpassword" } })
            })
            expect(getByRole('button', { value: "Войти" })).not.toHaveAttribute("disabled")
        })
    })
})


