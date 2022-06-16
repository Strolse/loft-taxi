import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import Map from "./Map";


jest.mock('mapbox-gl');

const mockStore = {
    getState: () => ({order: {} }),
    subscribe: () => { },
    dispatch: () => { }
  }

describe('Map component', () => {
    it('renders correctly', () => {
        render(
        <Provider store={mockStore}>
            <Map />
        </Provider>);
        expect(screen.getByTestId('map')).toBeInTheDocument();
    })
})