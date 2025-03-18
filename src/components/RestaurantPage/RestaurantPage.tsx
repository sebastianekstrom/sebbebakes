import React, { useEffect, useRef, useState } from "react";

import MapBox, { Marker } from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Page } from "components/Page/Page";

import { Text } from "components/Text/Text";

import "mapbox-gl/dist/mapbox-gl.css";

import type { Restaurant } from "constants/restaurants/types";

interface Props {
  restaurants: Restaurant[];
  city: string;
  metaImage: StaticImageData;
}

export const RestaurantPage = ({ restaurants, city, metaImage }: Props) => {
  const mapboxKey = process.env.MAPBOX_KEY;
  const mapRef = useRef<MapRef>();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [mapHeight, setMapHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateMapHeight = () => {
      setMapHeight(window.innerWidth < 1024 ? 200 : 600);
    };

    setTimeout(() => {
      updateMapHeight();
    }, 600);

    window.addEventListener("resize", updateMapHeight);

    return () => {
      window.removeEventListener("resize", updateMapHeight);
    };
  }, []);

  const flyEaglesFly = ({
    longitude,
    latitude,
  }: { longitude: number; latitude: number }) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 350,
      linear: false,
      curve: 0,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1) {
              const { longitude, latitude } = restaurants[index].coordinates;
              flyEaglesFly({ longitude, latitude });
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

    for (const section of sectionRefs.current) {
      if (section) observer.observe(section);
    }

    return () => {
      for (const section of sectionRefs.current) {
        if (section) observer.unobserve(section);
      }
    };
  }, [flyEaglesFly, restaurants]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, restaurants.length);
  }, [restaurants]);

  if (!mapHeight) return null;

  return (
    <Page
      metaTitle={`Restaurants / ${city}`}
      description={`Restaurants to visit in ${city}`}
      image={metaImage}
    >
      <div className="mb-8 mt-4 lg:mt-0 lg:mb-6 text-center lg:text-left">
        <Text variant="h4">{city}</Text>
        <Text>
          A carefully curated list of {restaurants.length} restaurants we've
          visited or wish to visit in {city}.
        </Text>
      </div>
      <div className="relative flex flex-col lg:flex-row">
        <MapBox
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
            const latitude = restaurant.coordinates.latitude;
            const longitude = restaurant.coordinates.longitude;
            return (
              <button
                key={restaurant.name}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  flyEaglesFly({
                    longitude,
                    latitude,
                  });
                  const section = sectionRefs.current[index];

                  if (section && scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const sectionTop = section.offsetTop;
                    container.scrollTo({
                      top: sectionTop,
                      behavior: "instant",
                    });
                  }
                }}
              >
                <Marker
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
                </Marker>
              </button>
            );
          })}
        </MapBox>

        <div
          className="overflow-auto overflow-y-scroll flex h-[600px] mt-4 lg:mt-0"
          ref={scrollContainerRef}
        >
          <section className="w-full lg:w-[400px] lg:ml-4 lg:pr-4">
            {restaurants.map((restaurant, index) => {
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
                          <Text variant="badge">
                            {restaurant.ratings?.["m&o"]}/10
                          </Text>
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
                                  <Text variant="badge">
                                    {chef.description}
                                  </Text>
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
            })}
          </section>
        </div>
      </div>
    </Page>
  );
};
