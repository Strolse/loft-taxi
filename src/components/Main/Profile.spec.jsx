import React from "react";
import { render } from "@testing-library/react"
import Profile from "./Profile";


jest.mock("./ProfileForm/ProfileForm.jsx", () => {
    const ProfileForm = () => <div>ProfileForm component</div>
    return ProfileForm
});

describe("Profile component", () => {

    it("renders correctly", () => {

        const { container } = render(
            <Profile />
        );
        expect(container.innerHTML).toMatch("ProfileForm component")
    }
    )
})
