import Image from "next/image";
import { Text } from "components/Text/Text";
import type { Restaurant } from "../../../constants/restaurants/types";

interface RestaurantCardProps {
  restaurant: Restaurant;
  showDivider?: boolean;
  className?: string;
  onRef?: (el: HTMLDivElement | null) => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  showDivider = false,
  className = "",
  onRef,
}) => {
  return (
    <div ref={onRef} className={className}>
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
            key={`${restaurant.name}-image`}
            alt=""
            quality={100}
          />
        </div>
        <div className="mb-2 flex justify-between">
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
          {restaurant.ratings ? (
            <div>
              {restaurant.ratings.michelin === "Bib" ? (
                <Image
                  width={20}
                  height={20}
                  className="w-[25px] lg:w-[20px] h-auto"
                  src="/images/misc/bib-gourmand.png"
                  alt="Bib Gourmand"
                  title="Bib Gourmand: good quality, good value cooking"
                />
              ) : (
                <div className="flex gap-[3px]">
                  {Array.from({
                    length: restaurant.ratings.michelin ?? 0,
                  }).map((_, starIndex) => (
                    <Image
                      width={20}
                      height={20}
                      className="w-[25px] lg:w-[20px] h-auto"
                      src="/images/misc/michelin-star.svg"
                      alt="Michelin star"
                      key={`${restaurant.name}-star-${starIndex + 1}`}
                    />
                  ))}
                </div>
              )}
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
      {showDivider && (
        <span className="bg-separator h-[2px] w-full block mt-8 mb-6" />
      )}
    </div>
  );
};
