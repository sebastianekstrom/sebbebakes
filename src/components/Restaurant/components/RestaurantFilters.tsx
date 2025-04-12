import { FilterButtons } from "components/FilterButtons/FilterButtons";
import type { Restaurant } from "../../../constants/restaurants/types";

interface FilterOption {
  label: string;
  value: string;
  disabled: boolean;
}

interface RestaurantFiltersProps {
  restaurants: Restaurant[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const RestaurantFilters: React.FC<RestaurantFiltersProps> = ({
  restaurants,
  activeFilter,
  onFilterChange,
}) => {
  const allCount = restaurants.length;
  const visitedCount = restaurants.filter(
    (restaurant) => restaurant.ratings?.["m&o"] !== undefined,
  ).length;
  const notVisitedCount = restaurants.filter(
    (restaurant) => restaurant.ratings?.["m&o"] === undefined,
  ).length;

  const filterOptions: FilterOption[] = [
    { label: `All (${allCount})`, value: "all", disabled: allCount === 0 },
    {
      label: `Visited (${visitedCount})`,
      value: "visited",
      disabled: visitedCount === 0,
    },
    {
      label: `Not visited (${notVisitedCount})`,
      value: "not_visited",
      disabled: notVisitedCount === 0,
    },
  ];

  return (
    <FilterButtons
      filters={filterOptions}
      onFilterChange={onFilterChange}
      activeFilter={activeFilter}
    />
  );
};
