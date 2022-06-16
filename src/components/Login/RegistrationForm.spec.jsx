import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Registration from "./Registration";


const mockStore = {
  getState: () => ({ auth: {} }),
  subscribe: () => { },
  dispatch: () => { }
}

describe("Registration", () => {

  it("renders correctly", () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Registration />
        </MemoryRouter>
      </Provider>
    );
    expect(getByText('Пароль')).toBeInTheDocument();
    expect(getByText('Регистрация')).toBeInTheDocument();
  })
})


