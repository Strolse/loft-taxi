import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, act, userEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProfileForm from "./ProfileForm";
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

describe("ProfileForm component", () => {

    it("renders correctly", () => {

        const { container } = render(
            <Provider store={store}>
                <ProfileForm />
            </Provider>
        );
        expect(container.innerHTML).toMatch("Введите платежные данные")
    })

    describe("with invalid inputs", () => {

        it("renders the validation errors", async () => {

            const { getByLabelText, container, getByRole } = render(
                <Provider store={store}>
                    <ProfileForm />
                </Provider>
            );

            const cardInput = getByLabelText('Номер карты');
            const nameInput = getByLabelText('Имя владельца');
            const cvcInput = getByLabelText('CVC');

            await act(async () => {
                fireEvent.change(cardInput, { target: { value: "000" } })
                fireEvent.change(nameInput, { target: { value: "j" } })
                fireEvent.change(nameInput, { target: { value: "" } })
                fireEvent.change(cvcInput, { target: { value: "053" } })
                fireEvent.change(cvcInput, { target: { value: "" } })
            })
            expect(container.innerHTML).toMatch("В номере карты 16 цифр")
            expect(container.innerHTML).toMatch("Введите имя")
            expect(container.innerHTML).toMatch("Введите cvc")
            expect(getByRole('button', { value: "Сохранить" })).toHaveAttribute("disabled")
        })
    })

    // describe("with valid inputs", () => {
    //     it("deleted disabled from the button", async () => {

    //         const { getByLabelText, getByRole, getByTestId } = render(
    //             <Provider store={store}>
    //                 <ProfileForm />
    //             </Provider>
    //         );

    //         const cardInput = getByLabelText('Номер карты');
    //         const nameInput = getByLabelText('Имя владельца');
    //         const dateInput = getByTestId('date');
    //         const cvcInput = getByLabelText('CVC');

    //         await act(async () => {
    //             fireEvent.change(cardInput, { target: { value: "0000888899990000" } })
    //             fireEvent.change(nameInput, { target: { value: "Olya" } })
    //             fireEvent.change(dateInput, { target: { value: "05/23" } })
    //             fireEvent.change(cvcInput, { target: { value: "098" } })  
    //         })
    //         expect(getByRole('button', { value: "Сохранить" })).not.toHaveAttribute("disabled")
    //     })  
    // }) 

    describe("onSubmit", () => {
        it("changes the modal window", async () => {

            const { container, getByTestId } = render(
                <Provider store={store}>
                    <MemoryRouter>
                        <ProfileForm />
                    </MemoryRouter>
                </Provider>
            );

            await act(async () => {
                fireEvent.submit(getByTestId('form'))
            })
            expect(container.innerHTML).not.toMatch("Введите платежные данные")
            expect(container.innerHTML).toMatch("Перейти на карту")
        })
    })
})