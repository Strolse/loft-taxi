import React from "react";
import {render} from "@testing-library/react"
import Login from "./Login";
import { AuthContext } from "../context/AuthContext";

const openPage = jest.fn();

describe("Login", () => {

  it("renders correctly", () => {
    const { container, getByText } = render(
      <AuthContext.Provider value={{ login: jest.fn() }}>
        <Login openPage={openPage} />
      </AuthContext.Provider>
    );
    expect(getByText('Пароль')).toBeInTheDocument();
    expect(container.innerHTML).toMatch('Войти');
  })
})
