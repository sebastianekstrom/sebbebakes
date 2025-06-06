import React from "react";

import Image from "next/image";
import { Page } from "components/Page/Page";

import Link from "next/link";

import { Text } from "components/Text/Text";
import stockholmImage from "public/images/restaurants/stockholm/metaImage.jpg";
import londonImage from "public/images/restaurants/london/metaImage.jpg";
import newYorkImage from "public/images/restaurants/new-york/metaImage.jpg";
import parisImage from "public/images/restaurants/paris/metaImage.jpg";
import torontoImage from "public/images/restaurants/toronto/metaImage.jpg";
import gothenburgImage from "public/images/restaurants/gothenburg/metaImage.jpg";
import { RESTAURANTS as STOCKHOLM_RESTAURANTS } from "../../constants/restaurants/stockholm";
import { RESTAURANTS as LONDON_RESTAURANTS } from "../../constants/restaurants/london";
import { RESTAURANTS as NEW_YORK_RESTAURANTS } from "../../constants/restaurants/new-york";
import { RESTAURANTS as PARIS_RESTAURANTS } from "../../constants/restaurants/paris";
import { RESTAURANTS as TORONTO_RESTAURANTS } from "../../constants/restaurants/toronto";
import { RESTAURANTS as GOTHENBURG_RESTAURANTS } from "../../constants/restaurants/gothenburg";
interface CityCard {
  name: string;
  slug: string;
  image: any;
  count: number;
}

export default function RestaurantsHome() {
  const cities: CityCard[] = [
    {
      name: "Stockholm",
      slug: "stockholm",
      image: stockholmImage,
      count: STOCKHOLM_RESTAURANTS.length,
    },
    {
      name: "London",
      slug: "london",
      image: londonImage,
      count: LONDON_RESTAURANTS.length,
    },
    {
      name: "Paris",
      slug: "paris",
      image: parisImage,
      count: PARIS_RESTAURANTS.length,
    },
    {
      name: "Gothenburg",
      slug: "gothenburg",
      image: gothenburgImage,
      count: GOTHENBURG_RESTAURANTS.length,
    },
    {
      name: "New York",
      slug: "new-york",
      image: newYorkImage,
      count: NEW_YORK_RESTAURANTS.length,
    },
    {
      name: "Toronto",
      slug: "toronto",
      image: torontoImage,
      count: TORONTO_RESTAURANTS.length,
    },
  ];

  const totalRestaurants = cities.reduce(
    (total, city) => total + city.count,
    0,
  );
  const description = `A carefully curated list of ${totalRestaurants} restaurants we've visited or wish to visit across the world.`;

  return (
    <Page
      metaTitle="Restaurants"
      description={description}
      image={stockholmImage}
    >
      <div>
        <div className="mb-8 max-w-[75%] hidden lg:block">
          <Text variant="h4">Restaurants</Text>
          <Text classNames="">{description}</Text>
        </div>

        <div className="lg:hidden mb-8 mt-4 text-center">
          <Text variant="h4">Restaurants</Text>
          <Text classNames="">{description}</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <article key={city.slug} className="flex flex-col">
              <Link
                href={`/restaurants/${city.slug}`}
                className="w-full h-full"
                tabIndex={-1}
              >
                <Image
                  alt=""
                  src={city.image}
                  className="w-full h-[204px] object-cover"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                  quality={100}
                />
                <Text variant="h4" classNames="mt-2">
                  {city.name}
                </Text>
                <Text variant="caption">{city.count} restaurants</Text>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Page>
  );
}
