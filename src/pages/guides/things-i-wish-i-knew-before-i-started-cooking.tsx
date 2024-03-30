import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Text from "components/Text";
import Link from "components/Link";
import heroImage from "public/images/techniques/things-i-wish-i-knew-before-i-started-cooking/thumbnails/tall.png";
import metaImage from "public/images/techniques/things-i-wish-i-knew-before-i-started-cooking/thumbnails/meta.png";
import Alert from "components/Alert";

export default function ThingsIWishIKnew() {
  return (
    <Page
      metaTitle="Things I wish I knew before I started cooking"
      description="Over 20 years of fumbling around in the kitchen, I've picked up a few tricks. Let's dive into some that actually worked."
      image={metaImage}
    >
      <Post
        title="Things I wish I knew before I started cooking"
        heroImage={heroImage}
        description={
          <Text variant="ingress">
            Over 20 years of fumbling around in the kitchen, I've picked up a
            few tricks. Let's dive into some that actually worked.
          </Text>
        }
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 pt-8 lg:pt-20">
          <div className="lg:col-span-5"></div>

          <div className="lg:col-span-7 mt-12 lg:mt-0 flex gap-8 flex-col">
            <div>
              <Text variant="h4" anchorID="Something missing">
                Feel like there's "something missing" in a dish?
              </Text>
              <Text>It's acid. Add some lemon juice or vinegar.</Text>
            </div>
            <div>
              <Text variant="h4" anchorID="Clean kitchen">
                Start with a clean kitchen
              </Text>
              <Text>This'll help you stay organized.</Text>
            </div>
            <div>
              <Text variant="h4" anchorID="Clean as you go">
                Clean as you go
              </Text>
              <Text>
                Efficiency is key; place that bowl directly in the dishwasher
                instead of waiting for water to boil. Your future self will
                thank you.
              </Text>
            </div>
            <div>
              <Text variant="h4" anchorID="Mise en place">
                Mise en place is le shit
              </Text>
              <Text>
                The last thing you want is to frantically chop onions as your
                main dish burns. Chop, measure, and prepare first. Trust me,
                it's a game-changer.
              </Text>
            </div>
            <div>
              <Text variant="h4" anchorID="Plan ahead">
                Plan ahead and reduce the amount of dishes
              </Text>
              <Text>
                Making a fish soup? Chop all the vegetables and whatever you
                need first before finishing with cutting the fish. That way you
                only need one cutting board and one knife.
              </Text>
            </div>
            <div>
              <Text variant="h4" anchorID="Gelatine">
                Store bought stock + gelatine = love
              </Text>
              <Text>
                If you're using store bought stock, or stock that you dilute
                with water, there's a good chance that it'll lack in gelatine.
                This will make your bolognese watery. Add some gelatine to the
                stock and get that thich saucy goody goodness.
              </Text>
            </div>
            <div>
              <Text variant="h4" anchorID="Mirepoix">
                Batch the mirepoix
              </Text>
              <Text>
                Mirepoix (mix of celery, onions and carrots) is the base of many
                sauces, braises and stews. Make a big batch of it, freeze it in
                portion sizes and always have it ready for use!
              </Text>
            </div>
            <div>
              <Text variant="h4" anchorID="Waste bin">
                Have a waste bin nearby
              </Text>
              <Text>
                To keep the kitchen tidy while cooking I always have a bowl
                nearby my working station where I can throw all the waste. If
                you wanna optimize it even more you can use a few layers of
                paper towels instead which is easier to throw in the trash when
                you're done.
              </Text>
            </div>
            <div>
              <Text variant="h4" anchorID="Grate onion">
                Grate your onion
              </Text>
              <Text>
                If you're making a more rustic dish like a stew or braise, grate
                your onion instead of chopping it. End result will be the same
                and you save a lot of time.
              </Text>
            </div>
            <div>
              <Text variant="h4" anchorID="Rely on your senses">
                Rely on your senses, not time
              </Text>
              <Text>
                If you're following a recipe that specifices cooking times, use
                it as a guideline and not a fact. Use your senses to determine
                if something is done cooking.
              </Text>
              <br />
              <Text>
                Wanna know if the wine has reduced? Smell it! If it doesn't
                smell acidic it's done. Are you supposed to fry something for 3
                minutes until browned and it's not browned? Fry it some more
                then!
              </Text>
            </div>
            <div>
              <Text variant="h4" anchorID="Read the recipe">
                Cooking from a recipe? <br /> Read the recipe, and then read it
                again.
              </Text>
              <Text>
                You probably missed something that will cause chaos down the
                line.
              </Text>
            </div>
            <div>
              <Text variant="h4" anchorID="Prep what you can prep">
                Prep what you can prep
              </Text>
              <Text>
                Making things beforehand will drastically reduce the stress that
                comes from serving people food.
              </Text>
              <br />
              <Text>
                Sauces like tomato, red wine and some emulsions can be made the
                day before, often with the benefit of better flavour. You can
                also keep sauces warm in a baine-marie (water bath) for up to
                two hours.
              </Text>
              <Alert
                title="The two hour rule"
                description={
                  <>
                    This rule comes from the FDA. After two hours above above
                    60°C/140°F the "risk of bacterial growth" increases. If I'm
                    cooking for myself I usually keep it warm for longer than
                    that, but if you're serving anyone else than yourself, keep
                    it safe.
                  </>
                }
              />
              <br />
              <Text>
                Vegetables can usually be prepped the day before, to be cooked
                just before the dinner.
              </Text>
            </div>
            <div>
              <Text variant="h4" anchorID="Dont overcrowd">
                Don't overcrowd the pan
              </Text>
              <Text>
                When sautéing or searing, avoid crowding the pan. Overcrowding
                leads to steaming rather than browning, sacrificing flavor and
                texture.
              </Text>
            </div>
          </div>
        </div>
      </Post>
    </Page>
  );
}
