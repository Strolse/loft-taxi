import React from "react";
import {render} from "@testing-library/react"
import MapPage from "./MapPage";


// jest.mock("./Map", ()=>({Map: () =><div>Map component</div>}));
// jest.mock("./Header", ()=>({Header: () => <div>Header component</div>}));

jest.mock("./Map", ()=>{
    const Map = ()=><div>Map component</div>
    return Map
});

jest.mock("./Header", ()=>{
    const Header = ()=><div>Header component</div>
    return Header
});

describe("MapPage component", ()=>{

    it("renders correctly", ()=>{
        const {container} = render(
            <MapPage/> 
        );
        expect(container.innerHTML).toMatch("Map component");
        expect(container.innerHTML).toMatch("Header component");
    }
    )
})


