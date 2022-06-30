import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import { render } from "@testing-library/react"

const mockStore = {
  getState: () => { },
  subscribe: () => { },
  dispatch: () => { }
}
describe("Header", () => {

  it("renders correctly", () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    )
    expect(getByText('Карта')).toBeInTheDocument();
    expect(getByText('Профиль')).toBeInTheDocument();
  })
})


