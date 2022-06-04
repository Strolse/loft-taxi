import React from "react";
import {render} from "@testing-library/react";
import App from "./App";
import {Provider} from "react-redux";
import { createMemoryHistory } from "history";
import { Route } from "react-router-dom";

jest.mock("./components/AppRouter", ()=>{
  const AppRouter = ()=><div>AppRouter component</div>
  return AppRouter
});

describe('App', ()=>{
  it("renders correctly", ()=>{
    const {container} = render(
    <App/>
    );
    expect(container.innerHTML).toMatch("AppRouter component")

  })
})