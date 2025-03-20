import React from "react";

import metaImage from "public/images/restaurants/stockholm/metaImage.jpg";

import { STOCKHOLM } from "../../constants/restaurants/stockholm";
import RestaurantPage from "components/RestaurantPage/RestaurantPage";

export const getStaticProps = async () => {
  return {
    props: {
      mapboxKey: process.env.MAPBOX_KEY,
    },
  };
};

export default function Stockholm({ mapboxKey }: { mapboxKey: string }) {
  return (
    <RestaurantPage
      restaurants={STOCKHOLM}
      city="Stockholm"
      metaImage={metaImage}
      mapboxKey={mapboxKey}
    />
  );
}
