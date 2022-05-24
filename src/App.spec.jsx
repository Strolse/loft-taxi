import React from "react";
import {render} from "@testing-library/react";
import App from "./App"

jest.mock("./components/Login", ()=>{
  const Login = ()=><div>Login component</div>
  return Login
});

jest.mock("./components/MapPage", ()=>{
  const MapPage = ()=><div>MapPage component</div>
  return MapPage
});



describe('App', ()=>{
  it("renders correctly", ()=>{
    const {container} = render(<App/>);
    expect(container.innerHTML).toMatch("Login component")

  })
})