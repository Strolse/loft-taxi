import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react"
import Login from "./Login";


jest.mock("./Registration", () => {
  const Registration = () => <div>Registration component</div>
  return Registration
});

const mockStore = {
  getState: () => { },
  subscribe: () => { },
  dispatch: () => { }
}

describe("Login", () => {

  it("renders correctly", () => {


    const { container, getByText } = render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );


    expect(getByText('Пароль')).toBeInTheDocument();
    expect(container.innerHTML).toMatch('Войти');
  })

})
