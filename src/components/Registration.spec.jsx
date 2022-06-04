import React from "react";
import { MemoryRouter } from "react-router-dom";
import Registration from "./Registration";
import { render } from "@testing-library/react";


describe("Registration", () => {

  it("renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Registration />
      </MemoryRouter>
    );
    expect(getByText('Пароль')).toBeInTheDocument();
    expect(getByText('Регистрация')).toBeInTheDocument();
  })
})


