import { render, screen } from "@testing-library/react";
import { RestaurantCard } from "./RestaurantCard";
import type { Restaurant } from "../../../constants/restaurants/types";

const mockRestaurant: Restaurant = {
  name: "Test Restaurant",
  coordinates: {
    latitude: 51.509438,
    longitude: -0.1328112,
  },
  image: "/test-image.jpg",
  chefs: [
    {
      name: "Test Chef",
      description: "Famous chef",
    },
  ],
  ratings: {
    michelin: 2,
    "m&o": 7.5,
  },
  description: "A test restaurant description",
  website: "https://test-restaurant.com",
};

describe("RestaurantCard", () => {
  it("renders the restaurant name", () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText("Test Restaurant")).toBeInTheDocument();
  });

  it("renders the restaurant description", () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(
      screen.getByText("A test restaurant description"),
    ).toBeInTheDocument();
  });

  it("renders the chef information", () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText("Test Chef")).toBeInTheDocument();
    expect(screen.getByText("Famous chef")).toBeInTheDocument();
  });

  it("renders the ratings", () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText("7.5/10")).toBeInTheDocument();
  });

  it("renders a divider when showDivider is true", () => {
    const { container } = render(
      <RestaurantCard restaurant={mockRestaurant} showDivider />,
    );
    expect(container.querySelector(".bg-separator")).toBeInTheDocument();
  });

  it("does not render a divider when showDivider is false", () => {
    const { container } = render(
      <RestaurantCard restaurant={mockRestaurant} showDivider={false} />,
    );
    expect(container.querySelector(".bg-separator")).not.toBeInTheDocument();
  });

  it("applies the provided className", () => {
    const { container } = render(
      <RestaurantCard restaurant={mockRestaurant} className="test-class" />,
    );
    expect(container.firstChild).toHaveClass("test-class");
  });

  it("calls onRef with the element reference", () => {
    const onRefMock = jest.fn();
    render(<RestaurantCard restaurant={mockRestaurant} onRef={onRefMock} />);
    expect(onRefMock).toHaveBeenCalled();
  });
});
