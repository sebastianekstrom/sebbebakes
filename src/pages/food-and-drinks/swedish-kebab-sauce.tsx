import React from "react";

import metaImage from "public/images/recipes/kebab-sauce/thumbnails/meta.png";
import heroImage from "public/images/recipes/kebab-sauce/thumbnails/tall.png";

import { Badge } from "components/Badge/Badge";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
  {
    value: 70,
    label: "Sour cream",
  },
  {
    value: 50,
    label: "Mayonnaise",
  },
  {
    value: 18.75,
    label: "Fefferoni juice",
  },
  {
    value: 1.75,
    label: "Fanta (orange flavor)",
  },
  {
    value: 0.5,
    label: "Aromat",
  },
  {
    value: 0.5,
    label: "Garlic powder",
  },
  {
    value: 0.25,
    label: "Dried oregano",
  },
  {
    value: 0.25,
    label: "Sambal Oelek (optional)",
  },
];

const STEPS = [
  <Text>
    Add all the ingredients in a container and mix with a spoon until everything
    is combined
  </Text>,
  <Text>
    Cover the container and put it in the fridge for <b>at least 2 hours</b>.
    Enjoy!
  </Text>,
];

export default function KebabSauce() {
  return (
    <Page
      metaTitle="Swedish kebab sauce"
      description="The classical kebab sauce served in the norther parts of Sweden"
      image={metaImage}
    >
      <Post
        title="Swedish kebab sauce"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="portion"
            ingredients={INGREDIENTS}
            additionalMeta={<Badge value="10min" label="Prep time" />}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              After months of <i>extensive</i> research I've finally managed to
              recreate the kebab sauce that's used in the northern parts of
              Sweden. It has some weird stuff in it (Fanta and fefferoni juice)
              but don't fear, embrace the weirdness, because the sauce is really
              damn good.
            </Text>
          </>
        }
      />
    </Page>
  );
}
