import React from "react";
import {render} from "@testing-library/react"
import Profile from "./Profile";



const openPage = jest.fn();



jest.mock("./Header", ()=>{
    const Header = ()=><div>Header component</div>
    return Header
});

describe("Profile component", ()=>{

    it("renders correctly", ()=>{
        const {container} = render(
            <Profile /> 
        );
        expect(container.innerHTML).toMatch("Header component")
    }
    )
})