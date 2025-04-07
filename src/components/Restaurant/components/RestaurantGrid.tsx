import type { Restaurant } from "../../../constants/restaurants/types";
import { RestaurantCard } from "./RestaurantCard";

interface RestaurantGridProps {
  restaurants: Restaurant[];
}

export const RestaurantGrid: React.FC<RestaurantGridProps> = ({
  restaurants,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {restaurants.map((restaurant, index) => (
        <RestaurantCard
          key={restaurant.name}
          restaurant={restaurant}
          className="mb-4"
        />
      ))}
    </div>
  );
};
