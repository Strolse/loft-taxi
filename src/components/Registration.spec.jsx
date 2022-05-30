import React from "react";
import Registration from "./Registration";
import { render } from "@testing-library/react";


describe("Registration", () => {

  it("renders correctly", () => {
    const { getByText } = render(
        <Registration/>
    );
    expect(getByText('Пароль')).toBeInTheDocument();
    expect(getByText('Регистрация')).toBeInTheDocument();
  })
})


