import type { RefObject } from "react";
import type { Restaurant } from "../../../constants/restaurants/types";
import { RestaurantCard } from "./RestaurantCard";

interface RestaurantListProps {
  restaurants: Restaurant[];
  scrollContainerRef: RefObject<HTMLDivElement>;
  onSetRef: (el: HTMLDivElement | null, index: number) => void;
}

export const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  scrollContainerRef,
  onSetRef,
}) => {
  return (
    <div
      className="overflow-auto overflow-y-scroll flex h-[600px] mt-4 lg:mt-0"
      ref={scrollContainerRef}
    >
      <section className="w-full lg:w-[400px] lg:ml-4 lg:pr-4">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant.name}
            restaurant={restaurant}
            onRef={(el) => onSetRef(el, index)}
            showDivider
            className={index !== 0 ? "py-2" : ""}
          />
        ))}
      </section>
    </div>
  );
};
