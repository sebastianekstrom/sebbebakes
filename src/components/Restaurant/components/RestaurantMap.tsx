import { useRef } from "react";
import * as MapGL from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import Image from "next/image";
import { Text } from "components/Text/Text";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Restaurant } from "../../../constants/restaurants/types";

interface RestaurantMapProps {
  restaurants: Restaurant[];
  mapboxKey: string;
  mapHeight: number;
  onMarkerClick: (restaurant: Restaurant, index: number) => void;
}

export const RestaurantMap: React.FC<RestaurantMapProps> = ({
  restaurants,
  mapboxKey,
  mapHeight,
  onMarkerClick,
}) => {
  const mapRef = useRef<MapRef>();

  const flyToLocation = ({
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

  return (
    <MapGL.default
      ref={mapRef as any}
      mapboxAccessToken={mapboxKey}
      initialViewState={{
        latitude: restaurants[0].coordinates.latitude,
        longitude: restaurants[0].coordinates.longitude,
        zoom: 14,
      }}
      style={{ width: "100%", height: mapHeight }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {restaurants.map((restaurant, index) => {
        const { latitude, longitude } = restaurant.coordinates;
        return (
          <button
            key={restaurant.name}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              flyToLocation({ longitude, latitude });
              onMarkerClick(restaurant, index);
            }}
          >
            <MapGL.Marker
              longitude={longitude}
              latitude={latitude}
              anchor="bottom"
            >
              <div className="bg-brand flex text-brand-secondary px-2 py-1 gap-2 items-center rounded-sm relative">
                <Image
                  width={140}
                  height={56.6}
                  className="w-[10px] h-auto fill-brand-secondary"
                  src="/images/misc/icon-food.svg"
                  alt=""
                />
                <Text variant="badge" classNames="text-brand-secondary">
                  {restaurant.name}
                </Text>
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-bg-brand">
                  <Image
                    width={140}
                    height={56.6}
                    className="w-[20px] h-auto"
                    src="/images/misc/icon-chevron.svg"
                    alt=""
                  />
                </div>
              </div>
            </MapGL.Marker>
          </button>
        );
      })}
    </MapGL.default>
  );
};

// Export the ref type to be used in the parent component
export type RestaurantMapRef = MapRef;
