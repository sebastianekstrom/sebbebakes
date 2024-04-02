import React from "react";
import { render, screen } from "../../../tooling/tests";
import The54 from "pages/pizza/the-54-long-proofed-new-york-style";

describe("The54 page", () => {
  it("renders title correctly", () => {
    render(<The54 />);
    const title = screen.queryAllByText(
      /The 54 – A long proofed New York style pizza/i
    );
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<The54 />);
    const ingress = screen.queryAllByText(
      /This recipe is like the cool cousin/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<The54 />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<The54 />);
    const step = screen.queryAllByText(
      /Warm up the water to room temperature/i
    );
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    render(<The54 />);
    const alert = screen.queryAllByText(
      /Even though the container is coated in oil/i
    );
    expect(alert).toBeDefined();
  });
});
