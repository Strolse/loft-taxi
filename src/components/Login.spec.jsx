import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter, Route } from "react-router-dom";
import { render, screen, fireEvent, userEvent } from "@testing-library/react"
import { createMemoryHistory } from "history";
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

  // describe("when clicked on navigation button", () => {
  //   it("opened the correct page", async () => {
  //     const history = createMemoryHistory();

  //     const { container, getByTestId } = render(

  //       <Provider store={mockStore}>
  //         <MemoryRouter>
  //           <Login />
  //         </MemoryRouter>
  //       </Provider>


  //     );

  //     await fireEvent.click(getByTestId("reg-link"));
  //     screen.debug();
  //     expect(container.innerHTML).toMatch("Registration component")
  //   })
  // })
})
