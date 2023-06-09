import React from "react";
import { render, screen } from "@testing-library/react";
import The54 from "pages/pizza/the-54-long-proofed-new-york-style";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("The54 page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/pizza/the-54-long-proofed-new-york-style",
    });

    render(<The54 />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(
      /The 54 – A long proofed New York style pizza/i
    );
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /This recipe is like the cool cousin/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const flourLabel = screen.queryAllByText(/Bread flour/i);
    const waterLabel = screen.queryAllByText(/Water/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(
      /Warm up the water to room temperature/i
    );
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    const alert = screen.queryAllByText(
      /Even though the container is coated in oil/i
    );
    expect(alert).toBeDefined();
  });
});
