import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("General Container is rendered", () => {
    render(<App />);
    const generalContainer = screen.getByTestId("general-container");
    expect(generalContainer).toBeInTheDocument();
});

test("Multiple Common Settings Containers are rendered", () => {
    render(<App />);
    const commonContainers = screen.getAllByTestId("common-container");
    expect(commonContainers.length).toBeGreaterThan(0);
    commonContainers.forEach(container => {
        expect(container).toBeInTheDocument();
    });
});
