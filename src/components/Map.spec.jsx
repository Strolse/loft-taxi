import React from "react";
import {render, screen} from "@testing-library/react";
import Map from "./Map";

jest.mock('mapbox-gl');

describe('Map component', ()=>{
    it('renders correctly', ()=>{
       render(<Map/>);
       expect(screen.getByTestId('map')).toBeInTheDocument();
    })
})