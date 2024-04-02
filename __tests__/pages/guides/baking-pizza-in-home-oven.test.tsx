import React from "react";
import { render, screen } from "../../../tooling/tests";
import BakingPizza from "pages/guides/baking-pizza-in-home-oven";

describe("BakingPizza page", () => {
  it("renders title correctly", () => {
    render(<BakingPizza />);
    const title = screen.queryAllByText(/Baking pizza in a home oven/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<BakingPizza />);
    const ingress = screen.queryAllByText(
      /Pizza loves heat. But a regular home oven/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<BakingPizza />);
    const step = screen.queryAllByText(
      /Insert your pizza steel into the oven/i
    );
    expect(step).toBeDefined();
  });
});
