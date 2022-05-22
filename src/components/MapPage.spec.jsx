import React from "react";
import {render} from "@testing-library/react"
import MapPage from "./MapPage";

const openPage = jest.fn();
jest.mock("./Map", ()=>({Map: () =><div>Map component</div>}));
jest.mock("./Header", ()=>({Header: () => <div>Header component</div>}));


describe("MapPage component", ()=>{

    it("renders correctly", ()=>{
        const {container} = render(
            <MapPage openPage={openPage}/>
        )
        expect(container.innerHTML).toMatch("Map component")
    })
})


