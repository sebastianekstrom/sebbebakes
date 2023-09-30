import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Text from "components/Text";
import Link from "components/Link";
import heroImage from "public/images/techniques/piefection/thumbnails/tall.jpg";
import metaImage from "public/images/techniques/piefection/thumbnails/meta.png";
import MethodImage from "components/MethodImage";
import Alert from "components/Alert";

export default function DinnerPartyPrep() {
  return (
    <Page
      metaTitle="Tips for prepping before a dinner party"
      description=""
      image={metaImage}
    >
      <Post
        title="Tips for prepping before a dinner party"
        heroImage={heroImage}
        description={
          <Text variant="ingress">
            Whether you're hosting a cozy dinner or an extravagant soirée,
            prepping is key to a successful evening. After all, nobody wants a
            chaotic kitchen scene while guests are eagerly waiting at the table.
            <br />
            <br />
            In this article, I'll list two common dishes and share my preferred
            methods for prepping them. Even if these aren't the exact dishes
            you're planning to serve, you might still pick up some useful tips
            and tricks to streamline your own prep process.
          </Text>
        }
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 pt-8 lg:pt-20">
          <div className="lg:col-span-5"></div>

          <div className="lg:col-span-7 mt-12 lg:mt-0">
            <Text variant="h4">General tips for any dish</Text>
            <ul>
              <li>
                <Text classNames="mt-2">
                  Make sure the <b>kitchen is clean before you start cooking</b>{" "}
                  and the dishwashes (if you have one) is emptied.
                </Text>
              </li>
              <li>
                <Text classNames="mt-2">
                  Always, always, always. Measure all your ingredients and put
                  them into containers before cooking.
                </Text>
              </li>
              <li>
                <Text classNames="mt-2">
                  Cooking from a recipe? Read the recipe, and then read it
                  again.
                </Text>
              </li>
              <li>
                <Text classNames="mt-2">
                  <b>Clean as you go</b>. There's a lot of downtime when cooking
                  a dish, use that time to clean up the kitchen.
                </Text>
              </li>
            </ul>

            <Text variant="h4" classNames="mt-12">
              Steak with red wine sauce and mashed potatoes
            </Text>
            <Text classNames="mt-2">
              A classic dish; meat, sauce, potatoes and roasted vegetables.
              Here's how I like to prep.
            </Text>
            <br />
            <Text>
              <b>The sauce</b>
            </Text>
            <Text classNames="mt-2">
              A sauce can safely, and easily, be kept warm (above 60°C/140°F)
              for two hours. Make the sauce a few hours beforehand, and keep
              above 60°C/140°F with a bain marie (water bath).
            </Text>
            <Alert
              title="The two hour rule"
              description={
                <>
                  This rule comes from the FDA. After two hours above above
                  60°C/140°F the "risk of bacterial growth increases". If I'm
                  cooking for myself I usually keep it warm for longer than
                  that, but if you're serving anyone else than yourself, keep it
                  safe.
                </>
              }
            />

            <Text classNames="mt-4">
              <b>The mashed potatoes</b>
            </Text>
            <Text classNames="mt-2">
              Same as with the sauce, the mashed potatoes can be made hours
              before and kept warm in a bain marie for up to two hours above
              60°C/140°F.
            </Text>

            <Text classNames="mt-4">
              <b>Roasted vegetables</b>
            </Text>
            <Text classNames="mt-2">
              Prepare the vegetables the day before (clean, chop, de-stem) and
              put them in an airtight container filled with water. Once dinner
              is getting ready, take them out of the fridge and pat them dry
              before throwing them into the oven.
            </Text>
            <Text classNames="mt-4">
              <b>The meat</b>
            </Text>
            <Text classNames="mt-2">
              Not much you can do here unfortunately. Take the meat out of the
              fridge an hour before cooking, and pat it dry.
            </Text>

            <Text variant="h4" classNames="mt-12">
              Bolognese
            </Text>
            <Text classNames="mt-2">
              Grate the parmesan the day before. Make the mirepoix the day
              before.
            </Text>

            <Text variant="h4" classNames="mt-12">
              Pizza
            </Text>
            <Text classNames="mt-2">
              Make the dough a few days before. Make tomato sauce day before.
              Almost all ingredients can be prepped the day before.
            </Text>
          </div>
        </div>
      </Post>
    </Page>
  );
}
