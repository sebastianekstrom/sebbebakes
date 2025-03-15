import type { Restaurant } from "constants/restaurants/stockholm";

export const sortRestaurants = (
  restaurants: Restaurant[],
  criteria: "m&o" | "michelin" | "default" | "no-m&o",
): Restaurant[] => {
  switch (criteria) {
    case "m&o":
      return [...restaurants].sort(
        (a, b) => (b.ratings?.["m&o"] ?? 0) - (a.ratings?.["m&o"] ?? 0),
      );
    case "michelin":
      return [...restaurants].sort((a, b) => {
        const aStars =
          typeof a.ratings?.michelin === "number" ? a.ratings.michelin : 0;
        const bStars =
          typeof b.ratings?.michelin === "number" ? b.ratings.michelin : 0;
        return bStars - aStars;
      });
    case "no-m&o":
      return [...restaurants].sort((a, b) => {
        const aHasRating = a.ratings?.["m&o"] !== undefined ? 0 : 1;
        const bHasRating = b.ratings?.["m&o"] !== undefined ? 0 : 1;
        return aHasRating - bHasRating;
      });
    case "default":
      return restaurants;
  }
};
