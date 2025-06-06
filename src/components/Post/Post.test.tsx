import { render, screen } from "@testing-library/react";
import React from "react";
import { setMockRouter } from "@test/setup";

import { Text } from "components/Text/Text";

import { Post } from "./Post";

describe("Post component", () => {
  beforeEach(() => {
    setMockRouter({
      route: "/bread/sourdough",
    });
  });
  it("renders the Post component with the provided title", () => {
    render(<Post title="Test Title" />);
    expect(screen.getAllByText("Test Title")).toBeDefined();
  });

  it("renders the ingredients and method sections when provided", () => {
    const ingredients = <Text>Test Ingredients</Text>;
    const method = <Text>Test Method</Text>;
    render(
      <Post title="Test Title" ingredients={ingredients} method={method} />,
    );
    expect(screen.getByText("Test Ingredients")).toBeDefined();
    expect(screen.getByText("Test Method")).toBeDefined();
  });

  it("renders the recommended section with the correct category title", () => {
    render(<Post title="Test Title" />);
    expect(screen.getByText("More delicious bread")).toBeDefined();
  });
});
