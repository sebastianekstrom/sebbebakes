import React, { useEffect, useRef, useState } from "react";

import MapBox from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Page } from "components/Page/Page";
import { Marker } from "./components/Marker";

import { Text } from "components/Text/Text";

import "mapbox-gl/dist/mapbox-gl.css";

import type { Restaurant } from "constants/restaurants/types";

interface Props {
  restaurant: Restaurant;
  city: string;
  metaImage: StaticImageData;
  mapboxKey: string;
  sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export default function RestaurantPage({ restaurant, sectionRefs }: Props) {
  return (
    <div
      key={restaurant.name}
      ref={(el) => {
        sectionRefs.current[index] = el;
      }}
      className={index !== 0 ? "py-2" : ""}
    >
      <div>
        <div className="flex items-center gap-4">
          <Text variant="h4" classNames="mb-2">
            {restaurant.name}
          </Text>
        </div>
        <div className="relative">
          <Image
            width={190}
            height={400}
            className="w-full h-[190px] object-cover mb-2"
            src={restaurant.image}
            key={`${restaurant.name}-star-${index + 1}`}
            alt=""
          />
        </div>
        <div className="mb-2 flex justify-between">
          {restaurant.ratings ? (
            <div>
              {restaurant.ratings.michelin === "Bib" ? (
                <Image
                  width={20}
                  height={20}
                  className="w-[25px] lg:w-[20px] h-auto"
                  src="/images/misc/bib-gourmand.png"
                  alt="Bib Gourmand"
                />
              ) : (
                <div className="flex gap-[3px]">
                  {Array.from({
                    length: restaurant.ratings.michelin ?? 0,
                  }).map((_, index) => (
                    <Image
                      width={20}
                      height={20}
                      className="w-[25px] lg:w-[20px] h-auto"
                      src="/images/misc/michelin-star.svg"
                      alt="Bib Gourmand"
                      key={`${restaurant.name}-star-${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : null}
          {restaurant.ratings?.["m&o"] ? (
            <div className="flex items-center justify-center gap-1">
              <Image
                width={140}
                height={56.6}
                className="w-[30px] lg:w-[20px] h-auto"
                src="/images/misc/logo-squircle.svg"
                alt=""
              />
              <Text variant="badge">{restaurant.ratings?.["m&o"]}/10</Text>
            </div>
          ) : null}
        </div>
        {restaurant.chefs ? (
          <div className="mb-2 mt-4">
            <Text variant="h5" classNames="mb-1 mt-4">
              Chefs
            </Text>
            <div
              className={`flex flex-col ${
                restaurant.chefs.length > 1 ? "gap-2" : ""
              }`}
            >
              {restaurant.chefs?.map((chef) => {
                return (
                  <div key={chef.name}>
                    <Text key={chef.name}>{chef.name}</Text>
                    {chef.description ? (
                      <Text variant="badge">{chef.description}</Text>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        <div className="mb-2">
          <Text variant="h5" classNames="mb-1 mt-4">
            About
          </Text>
          <Text>{restaurant.description}</Text>
        </div>
        <div className="mb-2">
          <Text variant="h5" classNames="mb-1 mt-4">
            Learn more
          </Text>
          <Text>
            <a href={restaurant.website}>Website</a>
          </Text>
        </div>
      </div>
      <span className="bg-separator h-[2px] w-full block mt-8 mb-6" />
    </div>
  );
}
