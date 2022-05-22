import React, {useContext} from "react";
import Header from "./Header";
import {render, screen} from "@testing-library/react"

const openPage = jest.fn();



jest.mock('react', () => {
    
    return {
      useContext: jest.fn()
    }
  });


describe("Header", ()=>{
    it("renders correctly", ()=>{
        render(<Header openPage={openPage} />); 
        const buttonElement = screen.getByText();
        expect(getByLabelText("Email")).toHaveAttribute('name', 'email')

        
    })
})


