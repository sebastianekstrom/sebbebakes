import { sortRestaurants } from "./sortRestaurants";
import type { MichelinRating } from "constants/restaurants/stockholm";

const baseRestaurantProps = {
  coordinates: {
    longitude: 18.0833116,
    latitude: 59.3128813,
  },
  image: "https://example.com/image.jpg",
  description: "Restaurant description",
  website: "https://example.com",
};

const mockedRestaurants = [
  {
    ...baseRestaurantProps,
    name: "Michelin only",
    ratings: {
      michelin: 1 as MichelinRating,
    },
  },
  {
    ...baseRestaurantProps,
    name: "Michelin and M&0",
    ratings: {
      michelin: 2 as MichelinRating,
      "m&o": 9.5,
    },
  },
  {
    ...baseRestaurantProps,
    name: "No rating",
  },
];

describe("sortRestaurants", () => {
  it("should sort restaurants by default", () => {
    const sortedRestaurants = sortRestaurants(mockedRestaurants, "default");
    expect(sortedRestaurants).toEqual(mockedRestaurants);
  });

  it("should sort restaurants by m&o rating", () => {
    const sortedRestaurants = sortRestaurants(mockedRestaurants, "m&o");
    expect(sortedRestaurants[0].name).toEqual("Michelin and M&0");
  });
});
