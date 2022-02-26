import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Genaral Container", () => {
    render(<App />);
    // eslint-disable-next-line testing-library/no-node-access
    const container = document.querySelector('[class="genaral-container"]');
    expect(container).toBeInTheDocument();
});
test("Common Settings Container", () => {
    render(<App />);
    // eslint-disable-next-line testing-library/no-node-access
    const container = document.querySelector('[class="common-container"]');
    expect(container).toBeInTheDocument();
});
