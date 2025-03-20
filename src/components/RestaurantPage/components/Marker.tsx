import React from "react";
import { Marker as MapBoxMarker } from "react-map-gl/mapbox";
import Image from "next/image";
import { Text } from "components/Text/Text";
import type { Restaurant } from "constants/restaurants/types";

export const Marker = ({
  longitude,
  latitude,
  restaurant,
  onClick,
}: {
  longitude: number;
  latitude: number;
  restaurant: Restaurant;
  onClick: () => void;
}) => {
  return (
    <button
      key={restaurant.name}
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <MapBoxMarker longitude={longitude} latitude={latitude} anchor="bottom">
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
      </MapBoxMarker>
    </button>
  );
};
