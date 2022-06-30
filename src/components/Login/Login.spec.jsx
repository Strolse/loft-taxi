import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react"
import Login from "./Login";


jest.mock("./RegistrationForm", () => {
  const RegistrationForm = () => <div>RegistrationForm component</div>
  return RegistrationForm
});

jest.mock("./LoginForm", () => {
  const LoginForm = () => <div>LoginForm component</div>
  return LoginForm
});

const mockStore = {
  getState: () => ({ auth: {} }),
  subscribe: () => { },
  dispatch: () => { }
}

describe("Login", () => {

  it("renders correctly, when opens registration", () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <MemoryRouter>
        <Login formType="registration" />
        </MemoryRouter>
      </Provider>
    );
    expect(getByText('RegistrationForm component')).toBeInTheDocument();
  })

  it("renders correctly, when opens login", () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <MemoryRouter>
        <Login formType="login" />
        </MemoryRouter>
      </Provider>
    );
    expect(getByText('LoginForm component')).toBeInTheDocument();
  })
})
