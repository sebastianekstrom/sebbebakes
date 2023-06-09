import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import { Header } from "./Header";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Header", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
    });
  });

  it("renders the header with logo and menu items", () => {
    render(<Header />);

    expect(screen.getByTestId("TEST_ID_LOGO")).toBeDefined();
    expect(screen.getByText("Pizza")).toBeDefined();
    expect(screen.getByText("Bread")).toBeDefined();
    expect(screen.getByText("Food & Drinks")).toBeDefined();
    expect(screen.getByText("Guides")).toBeDefined();
  });

  it("toggles the mobile menu", () => {
    render(<Header />);

    const mobileMenuButton = screen.getByRole("button", {
      name: "Open menu",
    });
    fireEvent.click(mobileMenuButton);

    expect(screen.getByRole("button", { name: "Close menu" })).toBeDefined();
    expect(screen.queryAllByText(/Pizza/i)).toBeDefined();
    expect(screen.queryAllByText(/Bread/i)).toBeDefined();
    expect(screen.queryAllByText(/Recipes/i)).toBeDefined();
    expect(screen.queryAllByText(/Guides/i)).toBeDefined();

    const closeButton = screen.getByRole("button", { name: "Close menu" });
    fireEvent.click(closeButton);

    expect(screen.queryByRole("button", { name: "Close menu" })).toBe(null);
  });
});
