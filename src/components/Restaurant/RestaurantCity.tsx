import { useEffect, useRef, useState } from "react";
import type { MapRef } from "react-map-gl/mapbox";
import { Page } from "components/Page/Page";
import { Text } from "components/Text/Text";
import type { Restaurant } from "../../constants/restaurants/types";

import { RestaurantMap } from "./components/RestaurantMap";
import { RestaurantList } from "./components/RestaurantList";
import { RestaurantGrid } from "./components/RestaurantGrid";
import { RestaurantFilters } from "./components/RestaurantFilters";
import { ViewModeToggle, type ViewMode } from "./components/ViewModeToggle";

interface RestaurantCityProps {
  restaurants: Restaurant[];
  cityName: string;
  description: string;
  metaImage: any;
  mapboxKey: string;
}

export const RestaurantCity: React.FC<RestaurantCityProps> = ({
  restaurants,
  cityName,
  description,
  metaImage,
  mapboxKey,
}) => {
  const mapRef = useRef<MapRef>();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [mapHeight, setMapHeight] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("map");

  useEffect(() => {
    const updateMapHeight = () => {
      setMapHeight(window.innerWidth < 1024 ? 150 : 600);
    };

    setTimeout(() => {
      updateMapHeight();
    }, 600);

    window.addEventListener("resize", updateMapHeight);

    return () => {
      window.removeEventListener("resize", updateMapHeight);
    };
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (filter === "all") return true;
    if (filter === "visited") return restaurant.ratings?.["m&o"] !== undefined;
    if (filter === "not_visited")
      return restaurant.ratings?.["m&o"] === undefined;
    return true;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1 && filteredRestaurants[index]) {
              const { longitude, latitude } =
                filteredRestaurants[index].coordinates;
              flyToRestaurant({ longitude, latitude });
            }
          }
        }
      },
      {
        root: scrollContainerRef.current,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.8,
      },
    );

    if (viewMode === "map") {
      for (const section of sectionRefs.current) {
        if (section) observer.observe(section);
      }
    }

    return () => {
      for (const section of sectionRefs.current) {
        if (section) observer.unobserve(section);
      }
    };
  }, [filteredRestaurants, viewMode]);

  useEffect(() => {
    // Update sectionRefs to match the filtered list
    sectionRefs.current = sectionRefs.current.slice(
      0,
      filteredRestaurants.length,
    );
  }, [filteredRestaurants.length]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    // Recalculate scroll position after filtering
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleViewModeChange = (newMode: ViewMode) => {
    setViewMode(newMode);
  };

  const handleMarkerClick = (restaurant: Restaurant, index: number) => {
    const section = sectionRefs.current[index];
    if (section && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const sectionTop = section.offsetTop;
      container.scrollTo({
        top: sectionTop,
        behavior: "instant",
      });
    }
  };

  const flyToRestaurant = ({
    longitude,
    latitude,
  }: {
    longitude: number;
    latitude: number;
  }) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 350,
      linear: false,
      curve: 0,
    });
  };

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  if (!mapHeight || filteredRestaurants.length === 0) return null;

  return (
    <Page
      metaTitle={`Restaurants / ${cityName}`}
      description={description}
      image={metaImage}
    >
      <div className="mb-8 mt-4 lg:mt-0 lg:mb-6 text-center lg:text-left">
        <Text variant="h4">{cityName}</Text>
        <Text>{description}</Text>
        <div className="flex mt-2 justify-between md:justify-start flex-wrap gap-2">
          <RestaurantFilters
            restaurants={restaurants}
            activeFilter={filter}
            onFilterChange={handleFilterChange}
          />

          <div className="lg:ml-6">
            <ViewModeToggle
              activeMode={viewMode}
              onChange={handleViewModeChange}
            />
          </div>
        </div>
      </div>

      {viewMode === "map" ? (
        <div className="relative flex flex-col lg:flex-row">
          <RestaurantMap
            restaurants={filteredRestaurants}
            mapboxKey={mapboxKey}
            mapHeight={mapHeight}
            onMarkerClick={handleMarkerClick}
          />

          <RestaurantList
            restaurants={filteredRestaurants}
            scrollContainerRef={scrollContainerRef}
            onSetRef={setCardRef}
          />
        </div>
      ) : (
        <RestaurantGrid restaurants={filteredRestaurants} />
      )}
    </Page>
  );
};
