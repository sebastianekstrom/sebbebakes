import { render, screen } from "@testing-library/react";
import { RestaurantGrid } from "./RestaurantGrid";
import { RestaurantCard } from "./RestaurantCard";
import type { Restaurant } from "../../../constants/restaurants/types";

describe("RestaurantGrid", () => {
  const mockRestaurants: Restaurant[] = [
    {
      name: "Restaurant 1",
      coordinates: { latitude: 51.5, longitude: -0.1 },
      image: "/test-image-1.jpg",
      description: "Test description 1",
      website: "https://test1.com",
    },
    {
      name: "Restaurant 2",
      coordinates: { latitude: 51.6, longitude: -0.2 },
      image: "/test-image-2.jpg",
      description: "Test description 2",
      website: "https://test2.com",
    },
    {
      name: "Restaurant 3",
      coordinates: { latitude: 51.7, longitude: -0.3 },
      image: "/test-image-3.jpg",
      description: "Test description 3",
      website: "https://test3.com",
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the grid with correct columns classes", () => {
    const { container } = render(
      <RestaurantGrid restaurants={mockRestaurants} />,
    );
    const gridContainer = container.firstChild as HTMLElement;

    expect(gridContainer).toHaveClass("grid");
    expect(gridContainer).toHaveClass("grid-cols-1");
    expect(gridContainer).toHaveClass("md:grid-cols-2");
    expect(gridContainer).toHaveClass("lg:grid-cols-4");
    expect(gridContainer).toHaveClass("gap-6");
  });

  it("renders a RestaurantCard for each restaurant", () => {
    render(<RestaurantGrid restaurants={mockRestaurants} />);

    expect(screen.getAllByTestId("restaurant-card")).toHaveLength(
      mockRestaurants.length,
    );
    expect(RestaurantCard).toHaveBeenCalledTimes(mockRestaurants.length);

    mockRestaurants.forEach((restaurant, index) => {
      expect(RestaurantCard).toHaveBeenNthCalledWith(
        index + 1,
        expect.objectContaining({
          restaurant,
          className: "mb-4",
        }),
        expect.anything(),
      );
      expect(screen.getByText(restaurant.name)).toBeInTheDocument();
    });
  });

  it("handles empty restaurants array gracefully", () => {
    render(<RestaurantGrid restaurants={[]} />);

    expect(screen.queryByTestId("restaurant-card")).not.toBeInTheDocument();
    expect(RestaurantCard).not.toHaveBeenCalled();
  });
});
