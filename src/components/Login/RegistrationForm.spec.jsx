import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, act } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";


const mockStore = {
  getState: () => ({ auth: {} }),
  subscribe: () => { },
  dispatch: () => { }
}

describe("RegistrationForm", () => {

  it("renders correctly", () => {
    const { getByLabelText, getByText } = render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <RegistrationForm />
        </MemoryRouter>
      </Provider>
    );
    expect(getByLabelText('Пароль*')).toBeInTheDocument();
    expect(getByText('Уже зарегистрирован?')).toBeInTheDocument();
  })

  describe("with invalid inputs", () => {
    it("renders the validation errors", async () => {
      const { getByRole, container, getByLabelText } = render(
        <Provider store={mockStore}>
          <MemoryRouter>
            <RegistrationForm />
          </MemoryRouter>
        </Provider>
      );
      const emailInput = getByLabelText('Email*');
      const passwordInput = getByLabelText('Пароль*');

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: "invalidemail" } })
        fireEvent.change(passwordInput, { target: { value: "j" } })
        fireEvent.change(passwordInput, { target: { value: "" } })
      })
      expect(container.innerHTML).toMatch("Введите корректный адрес электронной почты")
      expect(container.innerHTML).toMatch("Придумайте пароль")
      expect(getByRole('button')).toHaveAttribute("disabled")
    })
  })

  describe("with valid inputs", () => {
    it("deleted disabled from the button", async () => {

      const { getByRole, getByLabelText } = render(
        <Provider store={mockStore}>
          <MemoryRouter>
            <RegistrationForm />
          </MemoryRouter>
        </Provider>
      );

      const emailInput = getByLabelText('Email*');
      const passwordInput = getByLabelText('Пароль*');
      const nameInput = getByLabelText('Как вас зовут?*');

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: "test@mail.ru" } })
        fireEvent.change(passwordInput, { target: { value: "testpassword" } })
        fireEvent.change(nameInput, { target: { value: "testname" } })
      })
      expect(getByRole('button', { value: "Зарегистрироваться" })).not.toHaveAttribute("disabled")
    })
  })
})



