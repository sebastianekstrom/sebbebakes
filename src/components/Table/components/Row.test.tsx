import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Row } from "./Row";
import { Ingredient } from "types/recipe";

const defaultProps: Ingredient = {
  value: 100,
  label: "Flour",
  valueSuffix: " things",
  isFlour: true,
};

describe("Row", () => {
  it("renders the expected elements", () => {
    render(
      <Row
        item={defaultProps}
        value={10}
        dontPrintValue={false}
        displayPercentageButton
        showPercentage
        totalFlourAmount={2}
      />
    );

    expect(screen.getByText("Flour")).toBeInTheDocument();
    expect(screen.getByText("10 things")).toBeInTheDocument();
    expect(screen.getByText("(5000%)")).toBeInTheDocument();
  });

  it("does not print the value if prop is set", () => {
    render(
      <Row
        item={defaultProps}
        value={10}
        dontPrintValue
        displayPercentageButton
        showPercentage
        totalFlourAmount={2}
      />
    );

    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.queryByText("10 things")).not.toBeInTheDocument();
  });

  it("does not display the percentage value if correct props are set", () => {
    render(
      <Row
        item={defaultProps}
        value={10}
        dontPrintValue
        displayPercentageButton={false}
        showPercentage
        totalFlourAmount={2}
      />
    );

    expect(screen.queryByText("(5000%)")).not.toBeInTheDocument();
  });

  it("can be marked as done", () => {
    render(
      <Row
        item={defaultProps}
        value={10}
        dontPrintValue
        displayPercentageButton
        showPercentage
        totalFlourAmount={2}
      />
    );

    const button = screen.getByRole("button");
    expect(button).not.toHaveClass("opacity-10");
    fireEvent.click(button);
    expect(button).toHaveClass("opacity-10");
  });
});
