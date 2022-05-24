import React from "react";
import Registration from "./Registration";
import { render } from "@testing-library/react";
import { AuthContext } from "../context/AuthContext";

const openPage = jest.fn();

describe("Registration", () => {

  it("renders correctly", () => {
    const { getByText } = render(
      <AuthContext.Provider value={{ login: jest.fn() }}>
        <Registration openPage={openPage} />
      </AuthContext.Provider>
    );
    expect(getByText('Пароль')).toBeInTheDocument();
    expect(getByText('Регистрация')).toBeInTheDocument();
  })
})


