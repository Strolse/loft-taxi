import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react"
import { AuthContext } from "../context/AuthContext";

const openPage = jest.fn();

describe("Header", () => {

  it("renders correctly", () => {
    const { container, getByText } = render(
      <AuthContext.Provider value={{ logout: jest.fn() }}>
        <Header openPage={openPage} />
      </AuthContext.Provider>
    )
    expect(getByText('Карта')).toBeInTheDocument();
    expect(getByText('Профиль')).toBeInTheDocument();
  })
})


