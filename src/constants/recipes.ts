import { Categories, Recipe } from "../types/recipe";

export const CATEGORIES: Categories = {
  pizza: {
    value: "pizza",
    label: "Pizza",
    path: "/pizza",
  },
  bread: {
    value: "bread",
    label: "Bread",
    path: "/bread",
  },
  "food-and-drinks": {
    value: "food-and-drinks",
    label: "Food & Drinks",
    path: "/food-and-drinks",
  },
  guide: {
    value: "guide",
    label: "Guide",
    path: "/guides",
  },
};

export const RECIPES: Recipe[] = [
  {
    title: "Asian pork marinade",
    url: "/recipes/asian-pork-marinade",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/asian-pork-marinade/thumbnails/hero.png"),
      tall: require("../../public/images/recipes/asian-pork-marinade/thumbnails/tall.png"),
      wide: require("../../public/images/recipes/asian-pork-marinade/thumbnails/wide.png"),
      square: require("../../public/images/recipes/asian-pork-marinade/thumbnails/square.png"),
      meta: require("../../public/images/recipes/asian-pork-marinade/thumbnails/meta.png"),
    },
    description:
      "Elevate your pork dishes with this rich, Vietnamese-inspired marinade. Perfect for grilling, roasting, or pan-frying pork to perfection.",
  },
  {
    title: "Cheesy bread rolls",
    url: "/bread/cheesy-bread-rolls",
    category: CATEGORIES["bread"],
    thumbnails: {
      hero: require("../../public/images/bread/cheesy-bread-rolls/thumbnails/hero.png"),
      tall: require("../../public/images/bread/cheesy-bread-rolls/thumbnails/tall.png"),
      wide: require("../../public/images/bread/cheesy-bread-rolls/thumbnails/wide.png"),
      square: require("../../public/images/bread/cheesy-bread-rolls/thumbnails/square.png"),
      meta: require("../../public/images/bread/cheesy-bread-rolls/thumbnails/meta.png"),
    },
    description:
      "Made with Manitoba flour, these rolls combine a chewy interior with a crispy cheese topping. Ideal for a sandwich that's satisfyingly cheesy and crunchy.",
  },
  {
    title: "Chili oil noodles",
    url: "/food-and-drinks/chili-oil-noodles",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/chili-oil-noodles/thumbnails/hero.png"),
      tall: require("../../public/images/recipes/chili-oil-noodles/thumbnails/tall.png"),
      wide: require("../../public/images/recipes/chili-oil-noodles/thumbnails/wide.png"),
      square: require("../../public/images/recipes/chili-oil-noodles/thumbnails/square.png"),
      meta: require("../../public/images/recipes/chili-oil-noodles/thumbnails/meta.png"),
    },
    description:
      "This chili oil noodle recipe is a quick and flavorful way to level up your meals. Make your own spicy chili oil with a crispy shallot and garlic kick.  It doesn't just work great on noodles; you can also drizzle it on bread or anything else that needs a flavor boost. Plus, you can store it in the fridge for a long time, so it's a gift that keeps on giving.",
  },
  {
    title: "Cheddar dip",
    url: "/food-and-drinks/cheddar-dip",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/cheddar-dip/thumbnails/hero.png"),
      tall: require("../../public/images/recipes/cheddar-dip/thumbnails/tall.png"),
      wide: require("../../public/images/recipes/cheddar-dip/thumbnails/wide.png"),
      square: require("../../public/images/recipes/cheddar-dip/thumbnails/square.png"),
      meta: require("../../public/images/recipes/cheddar-dip/thumbnails/meta.png"),
    },
    description:
      "This cheddar dip employs a blend of culinary science and straightforward cooking, utilizing sodium citrate for a silky-smooth texture and iota carrageenan for textural stability. Perfect for chips, vegetables, or as a luxurious drizzle over nachos.",
  },
  {
    title: "Birria tacos",
    url: "/food-and-drinks/birria-tacos",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/birria-tacos/thumbnails/hero.png"),
      tall: require("../../public/images/recipes/birria-tacos/thumbnails/tall.png"),
      wide: require("../../public/images/recipes/birria-tacos/thumbnails/wide.png"),
      square: require("../../public/images/recipes/birria-tacos/thumbnails/square.png"),
      meta: require("../../public/images/recipes/birria-tacos/thumbnails/meta.png"),
    },
    description:
      "These tacos are a standout in the world of Mexican cuisine. At the heart of this recipe is the slow-cooked meat, steeped in the sweetness of Guajillo chilies.",
  },
  {
    title: "Bordelaise sauce",
    url: "/food-and-drinks/bordelaise-sauce",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/bordelaise-sauce/thumbnails/hero.png"),
      tall: require("../../public/images/recipes/bordelaise-sauce/thumbnails/tall.png"),
      wide: require("../../public/images/recipes/bordelaise-sauce/thumbnails/wide.png"),
      square: require("../../public/images/recipes/bordelaise-sauce/thumbnails/square.png"),
      meta: require("../../public/images/recipes/bordelaise-sauce/thumbnails/meta.png"),
    },
    description:
      "Bordelaise sauce is a classic French sauce named after France’s Bordeaux region, which is well-known for its wine. It’s a flavorful sauce made from dry red wine, bone marrow, butter, shallots, and demi-glace.",
  },
  {
    title: "Pasta alla puttanesca",
    url: "/food-and-drinks/puttanesca",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/puttanesca/thumbnails/hero.png"),
      tall: require("../../public/images/recipes/puttanesca/thumbnails/tall.png"),
      wide: require("../../public/images/recipes/puttanesca/thumbnails/wide.jpg"),
      square: require("../../public/images/recipes/puttanesca/thumbnails/square.png"),
      meta: require("../../public/images/recipes/puttanesca/thumbnails/meta.png"),
    },
    description:
      "Pasta alla Puttanesca is a rustic, hearty dish from southern Italy. Made with simple, robust ingredients like olives, capers, tomatoes, and anchovies, this pasta dish delivers a sauce that's packed with authentic, homely flavors.",
  },
  {
    title: "The 54 – A long proofed NY style pizza",
    url: "/pizza/the-54-long-proofed-new-york-style",
    category: CATEGORIES.pizza,
    thumbnails: {
      hero: require("../../public/images/pizza/54-new-york-style/thumbnails/hero.jpg"),
      tall: require("../../public/images/pizza/54-new-york-style/thumbnails/tall.jpg"),
      wide: require("../../public/images/pizza/54-new-york-style/thumbnails/wide.jpg"),
      square: require("../../public/images/pizza/54-new-york-style/thumbnails/square.png"),
      meta: require("../../public/images/pizza/54-new-york-style/thumbnails/meta.png"),
    },
    description:
      "This recipe is a modification of my New York Style pizza with the goal of having a really long proof time to develop maximum taste. To be able to have a total of 54 hour proof time the dough needs very little yeast. The recipe also includes something called Diastatic malt powder which improves the rise, texture and crust. It's not required to use, but highly encouraged.",
  },
  {
    title: "Sebby's",
    url: "/pizza/sebbys",
    category: CATEGORIES.pizza,
    thumbnails: {
      hero: require("../../public/images/recipes/sebbys/thumbnails/hero.png"),
      tall: require("../../public/images/recipes/sebbys/thumbnails/tall.png"),
      wide: require("../../public/images/recipes/sebbys/thumbnails/wide.png"),
      square: require("../../public/images/recipes/sebbys/thumbnails/square.png"),
      meta: require("../../public/images/recipes/sebbys/thumbnails/meta.png"),
    },
    description:
      "Every Swede knows about the glorious Gorby's, a pirog filled with low quality meat and topped with even lower quality cheese. This recipe is a version of the Gorby's, with home made dough and a delicious variant of a bolognese. I recommend making the bolognese a few hours, up to a day, before making the pirog to develop more flavor.",
  },
  {
    title: "Baguette",
    url: "/bread/baguette",
    category: CATEGORIES.bread,
    thumbnails: {
      hero: require("../../public/images/bread/baguette/thumbnails/hero.jpg"),
      tall: require("../../public/images/bread/baguette/thumbnails/tall.jpg"),
      wide: require("../../public/images/bread/baguette/thumbnails/wide.jpg"),
      square: require("../../public/images/bread/baguette/thumbnails/square.png"),
      meta: require("../../public/images/bread/baguette/thumbnails/meta.png"),
    },
    description:
      "This recipe will produce a light and fluffy baguette with a semi open crumb. Baguettes are one of the trickier breads to make due to the shaping, but it's really fun and with practice it gets easier.",
  },
  {
    title: "Pasta Bolognese",
    url: "/food-and-drinks/bolognese",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/bolognese/thumbnails/hero.png"),
      tall: require("../../public/images/recipes/bolognese/thumbnails/tall.png"),
      wide: require("../../public/images/recipes/bolognese/thumbnails/wide.png"),
      square: require("../../public/images/recipes/bolognese/thumbnails/square.png"),
      meta: require("../../public/images/recipes/bolognese/thumbnails/meta.png"),
    },
    description:
      "There are almost as many Bolognese recipes as there are Italians, each one unique. Yet, here's my favorite take on it. This tasty version combines beef, chicken stock and milk, simmering for over 2 hours. The outcome is a delicious sauce with an amazing texture and depth that'll make your taste buds dance with joy.",
  },
  {
    title: "New York style pizza dough",
    url: "/pizza/new-york-style",
    category: CATEGORIES.pizza,
    thumbnails: {
      hero: require("../../public/images/pizza/ny-style/thumbnails/hero.jpg"),
      tall: require("../../public/images/pizza/ny-style/thumbnails/tall.jpg"),
      wide: require("../../public/images/pizza/ny-style/thumbnails/wide.jpg"),
      square: require("../../public/images/pizza/ny-style/thumbnails/square.png"),
      meta: require("../../public/images/pizza/ny-style/thumbnails/meta.png"),
    },
    description:
      "The classic New York style pizza has a crispy crust and very thin bottom. A touch of sugar adds a bit of sweetness to it compared to the Neapolitan or Roman ones and the olive oil gives the crust a real nice color and texture. The dough is quite forgiving and it’s optimal for baking in your home oven. This dough pairs very well with my New York Style pizza sauce, and for instructions on how to bake it please see my guide on how to bake pizza in a home oven. For optimal flavor I recommend cold proofing the dough in the fridge for at least 24 hours!",
  },
  {
    title: "Banh mi bun",
    url: "/bread/banh-mi-bun",
    category: CATEGORIES.bread,
    thumbnails: {
      hero: require("../../public/images/bread/banh-mi-bun/thumbnails/hero.png"),
      tall: require("../../public/images/bread/banh-mi-bun/thumbnails/tall.png"),
      wide: require("../../public/images/bread/banh-mi-bun/thumbnails/wide.png"),
      square: require("../../public/images/bread/banh-mi-bun/thumbnails/square.png"),
      meta: require("../../public/images/bread/banh-mi-bun/thumbnails/meta.png"),
    },
    description:
      "This iconic Vietnamese bread is known for its fluffy interior and thin, soft crust, perfect for loading up with chicken or pork, pickled carrots and daikon, pâté, chili, and cucumber.",
  },
  {
    title: "Things I wish I knew before I started cooking",
    url: "/guides/things-i-wish-i-knew-before-i-started-cooking",
    category: CATEGORIES.guide,
    thumbnails: {
      hero: require("../../public/images/techniques/things-i-wish-i-knew-before-i-started-cooking/thumbnails/hero.png"),
      tall: require("../../public/images/techniques/things-i-wish-i-knew-before-i-started-cooking/thumbnails/tall.png"),
      wide: require("../../public/images/techniques/things-i-wish-i-knew-before-i-started-cooking/thumbnails/wide.png"),
      square: require("../../public/images/techniques/things-i-wish-i-knew-before-i-started-cooking/thumbnails/square.png"),
      meta: require("../../public/images/techniques/things-i-wish-i-knew-before-i-started-cooking/thumbnails/meta.png"),
    },
    description:
      "Over 20 years of fumbling around in the kitchen, I've picked up a few tricks. Let's dive into some that actually worked.",
  },
  {
    title: "Gear for baking",
    url: "/guides/gear-for-baking",
    category: CATEGORIES.guide,
    thumbnails: {
      hero: require("../../public/images/techniques/gear/thumbnails/hero.jpg"),
      tall: require("../../public/images/techniques/gear/thumbnails/tall.jpg"),
      wide: require("../../public/images/techniques/gear/thumbnails/wide.jpg"),
      square: require("../../public/images/techniques/gear/thumbnails/square.png"),
      meta: require("../../public/images/techniques/gear/thumbnails/meta.png"),
    },
    description:
      "You don't need any gear to bake bread or pizzas, but it can definitely help make it easier and more efficient. Here's my most used tools when I bake. This list contains links to products, these are not affiliate links, just products that I like to use.",
  },
  {
    title: "Neapolitan style pizza dough",
    url: "/pizza/neapolitan",
    category: CATEGORIES.pizza,
    thumbnails: {
      hero: require("../../public/images/pizza/neapolitan/thumbnails/hero.jpg"),
      tall: require("../../public/images/pizza/neapolitan/thumbnails/tall.jpg"),
      wide: require("../../public/images/pizza/neapolitan/thumbnails/wide.jpg"),
      square: require("../../public/images/pizza/neapolitan/thumbnails/square.png"),
      meta: require("../../public/images/pizza/neapolitan/thumbnails/meta.png"),
    },
    description:
      "The classic of the classics. The Neapolitan pizza has a thin base and a big and chewy crust. This dough should be cold proofed for at least 24 hours for best results. Beware, this dough is not suitable for home ovens. While it would work, the Neapolitan pizza needs to be cooked in ~90 seconds to create the correct texture. This dough pairs well with my Neapolitan style tomato sauce.",
  },
  {
    title: "Detroit style pizza",
    url: "/pizza/detroit-style",
    category: CATEGORIES.pizza,
    thumbnails: {
      hero: require("../../public/images/pizza/detroit/thumbnails/hero.jpg"),
      tall: require("../../public/images/pizza/detroit/thumbnails/tall.jpg"),
      wide: require("../../public/images/pizza/detroit/thumbnails/wide.jpg"),
      square: require("../../public/images/pizza/detroit/thumbnails/square.png"),
      meta: require("../../public/images/pizza/detroit/thumbnails/meta.png"),
    },
    description:
      "The Detroit style pizza is a deep-dish pizza made in a rectangle steel pan and then cut into squares. The dough has a unusually high hydration level for a pizza which creates a fluffy, moist and delicious pizza topped with low hydration mozzarella and sausage. This recipe is inspired by J. Kenji López-Alt but with modifications to streamline the process and add a bit more flavor.",
  },
  {
    title: "Simple loaf",
    url: "/bread/the-simple-loaf",
    category: CATEGORIES.bread,
    thumbnails: {
      hero: require("../../public/images/bread/the-simple-loaf/thumbnails/hero.png"),
      tall: require("../../public/images/bread/the-simple-loaf/thumbnails/tall.png"),
      wide: require("../../public/images/bread/the-simple-loaf/thumbnails/wide.png"),
      square: require("../../public/images/bread/the-simple-loaf/thumbnails/square.png"),
      meta: require("../../public/images/bread/the-simple-loaf/thumbnails/meta.png"),
    },
    description:
      "A basic, simple and delicious loaf of bread that only takes around 2-3 hours to bake! The hydration is relatively low which makes it easy to handle, but high enough to produce a juicy and delicious loaf.",
  },
  {
    title: "Neapolitan style pizza sauce",
    url: "/pizza/neapolitan-style-sauce",
    category: CATEGORIES.pizza,
    thumbnails: {
      hero: require("../../public/images/pizza/neapolitan-sauce/thumbnails/hero.jpg"),
      tall: require("../../public/images/pizza/neapolitan-sauce/thumbnails/tall.jpg"),
      wide: require("../../public/images/pizza/neapolitan-sauce/thumbnails/wide.jpg"),
      square: require("../../public/images/pizza/neapolitan-sauce/thumbnails/square.png"),
      meta: require("../../public/images/pizza/neapolitan-sauce/thumbnails/meta.png"),
    },
    description:
      "There's a lot of variants for the tomato sauce for a Neapolitan pizza. Some prefer to not cook it, some prefer it containing nothing more than San Marzano's, basil and salt. This is my favorite way of doing it. It's not as flavorful as my New York Style sauce, but more subtle to let the toppings shine. This sauce pairs well with my Neapolitan style dough.",
  },
  {
    title: "Baking pizza in a home oven",
    url: "/guides/baking-pizza-in-home-oven",
    category: CATEGORIES.guide,
    thumbnails: {
      hero: require("../../public/images/techniques/baking-home-oven/thumbnails/hero.jpg"),
      tall: require("../../public/images/techniques/baking-home-oven/thumbnails/tall.jpg"),
      wide: require("../../public/images/techniques/baking-home-oven/thumbnails/wide.jpg"),
      square: require("../../public/images/techniques/baking-home-oven/thumbnails/square.png"),
      meta: require("../../public/images/techniques/baking-home-oven/thumbnails/meta.png"),
    },
    description:
      "Pizza loves heat. But a regular home oven doesn't provide as much heat as professional ones or wood ovens. But do not fear, there are a few tricks you can do to get extremely good results in your home oven!",
  },
  {
    title: "Hamburger bun",
    url: "/bread/hamburger-bun",
    category: CATEGORIES.bread,
    thumbnails: {
      hero: require("../../public/images/bread/bun/thumbnails/hero.jpg"),
      tall: require("../../public/images/bread/bun/thumbnails/tall.jpg"),
      wide: require("../../public/images/bread/bun/thumbnails/wide.jpg"),
      square: require("../../public/images/bread/bun/thumbnails/square.png"),
      meta: require("../../public/images/bread/bun/thumbnails/meta.png"),
    },
    description:
      "These are the perfect buns for a smashed burger (somewhere around a 75g patty), or whatever burger you like. It uses something called dough conditioner, which is like the MSG of the baking world. It speeds up proofing time, strengthens the gluten and improves caramelization in the oven. This is totally optional, but try it if you can get a hold of it!",
  },
  {
    title: "Hybrid pizza dough",
    url: "/pizza/hybrid-dough",
    category: CATEGORIES.pizza,
    thumbnails: {
      hero: require("../../public/images/pizza/hybrid/thumbnails/hero.jpg"),
      tall: require("../../public/images/pizza/hybrid/thumbnails/tall.jpg"),
      wide: require("../../public/images/pizza/hybrid/thumbnails/wide.jpg"),
      square: require("../../public/images/pizza/hybrid/thumbnails/square.png"),
      meta: require("../../public/images/pizza/hybrid/thumbnails/meta.png"),
    },
    description:
      "This dough is the result of me experimenting with two different doughs; the New York style and the Neopolitan style. It uses poolish, which is a pre-fermented dough that you make the day before and later incorporate into the dough. The poolish will greatly increase the flavor and texture of the pizza. The recipe also uses both Tipo 00 and Manitoba flour, Manitoba flour has a very high W strength which results in better gluten development. The end result is a New York style dough with tons of flavor and a great crust!",
  },
  {
    title: "New York style pizza sauce",
    url: "/pizza/new-york-style-sauce",
    category: CATEGORIES.pizza,
    thumbnails: {
      hero: require("../../public/images/pizza/ny-sauce/thumbnails/hero.jpg"),
      tall: require("../../public/images/pizza/ny-sauce/thumbnails/tall.jpg"),
      wide: require("../../public/images/pizza/ny-sauce/thumbnails/wide.jpg"),
      square: require("../../public/images/pizza/ny-sauce/thumbnails/square.png"),
      meta: require("../../public/images/pizza/ny-sauce/thumbnails/meta.png"),
    },
    description:
      "This tomato sauce is quite salty to balance the sweetness of the New York Style pizza dough, if you’re using another dough recipe I would recommend reducing the salt with 2-3 grams. If possible you should buy a can of whole (not crushed) tomatoes, preferably San Marzano ones. A regular old can of crushed tomatoes will definitely do the trick, but really good ones are still relatively cheap and can be found in most supermarkets. This tomato sauce is not cooked beforehand, but instead gets cooked while baking the pizza. I think pre cooking the sauce develops too much flavor and makes it more intense than it needs to be.",
  },
  {
    title: "Basil-infused oil",
    url: "/food-and-drinks/basil-infused-oil",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/basil-infused-oil/thumbnails/hero.jpg"),
      tall: require("../../public/images/recipes/basil-infused-oil/thumbnails/tall.jpg"),
      wide: require("../../public/images/recipes/basil-infused-oil/thumbnails/wide.jpg"),
      square: require("../../public/images/recipes/basil-infused-oil/thumbnails/square.png"),
      meta: require("../../public/images/recipes/basil-infused-oil/thumbnails/meta.png"),
    },
    description:
      "Elevate your meals with this easy-to-make recipe. Adding a flavorful twist to pizza, pasta, or grilled veggies, this homemade basil-infused oil is sure to impress.",
  },
  {
    title: "Danish rye bread",
    url: "/bread/danish-rye-bread",
    category: CATEGORIES.bread,
    thumbnails: {
      hero: require("../../public/images/bread/danish-rye-bread/thumbnails/hero.jpg"),
      tall: require("../../public/images/bread/danish-rye-bread/thumbnails/tall.jpg"),
      wide: require("../../public/images/bread/danish-rye-bread/thumbnails/wide.jpg"),
      square: require("../../public/images/bread/danish-rye-bread/thumbnails/square.png"),
      meta: require("../../public/images/bread/danish-rye-bread/thumbnails/meta.png"),
    },
    description:
      "A delicious sweet Danish rye bread that only takes an our or so to make. It's great as an appetizer or snack, served with some marmelade. One batch makes for about 12 mini loaves of bread. This recipe contains a lot of Nordic ingredients which is why the ingredient list is translated to the language of vikings.",
  },
  {
    title: "Swedish kebab sauce",
    url: "/food-and-drinks/swedish-kebab-sauce",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/kebab-sauce/thumbnails/hero.jpg"),
      tall: require("../../public/images/recipes/kebab-sauce/thumbnails/tall.jpg"),
      wide: require("../../public/images/recipes/kebab-sauce/thumbnails/wide.jpg"),
      square: require("../../public/images/recipes/kebab-sauce/thumbnails/square.png"),
      meta: require("../../public/images/recipes/kebab-sauce/thumbnails/meta.png"),
    },
    description:
      "After months of extensive research I've finally managed to recreate the kebab sauce that's used in the northern parts of Sweden. It has some weird stuff in it (Fanta and fefferoni juice) but don't fear, embrace the weirdness, because the sauce is really damn good.",
  },
  {
    title: "Dried citrus",
    url: "/food-and-drinks/dried-citrus",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/dried-citrus/thumbnails/hero.jpg"),
      tall: require("../../public/images/recipes/dried-citrus/thumbnails/tall.jpg"),
      wide: require("../../public/images/recipes/dried-citrus/thumbnails/wide.jpg"),
      square: require("../../public/images/recipes/dried-citrus/thumbnails/square.png"),
      meta: require("../../public/images/recipes/dried-citrus/thumbnails/meta.png"),
    },
    description:
      "Garnishing cocktails with dried limes or blood oranges adds a touch of sophistication, elevating both presentation and flavor. This simple yet effective technique is a great way to make your drinks stand out.",
  },
  {
    title: "A saucy guide to pizza do's and don'ts",
    url: "/guides/piefection",
    category: CATEGORIES.guide,
    thumbnails: {
      hero: require("../../public/images/techniques/piefection/thumbnails/hero.jpg"),
      tall: require("../../public/images/techniques/piefection/thumbnails/tall.jpg"),
      wide: require("../../public/images/techniques/piefection/thumbnails/wide.jpg"),
      square: require("../../public/images/techniques/piefection/thumbnails/square.png"),
      meta: require("../../public/images/techniques/piefection/thumbnails/meta.png"),
    },
    description:
      "Ah, pizza—the culinary equivalent of a warm hug, a high-five, and a victorious fist pump all rolled into one. But with great power comes great responsibility, and when it comes to pizza, I've stumbled into more pitfalls than I care to admit. Fear not, dear pizza enthusiasts! For I have emerged, battle-scarred and wiser, to share my hard-earned knowledge with you. Behold, the sacred list of do's and don'ts for your pizza-making journey.",
  },
  {
    title: "Burger sauce",
    url: "/food-and-drinks/burger-sauce",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/burger-sauce/thumbnails/hero.jpg"),
      tall: require("../../public/images/recipes/burger-sauce/thumbnails/tall.jpg"),
      wide: require("../../public/images/recipes/burger-sauce/thumbnails/wide.jpg"),
      square: require("../../public/images/recipes/burger-sauce/thumbnails/square.png"),
      meta: require("../../public/images/recipes/burger-sauce/thumbnails/meta.png"),
    },
    description:
      "A delicious mix of creamy mayo, spicy sriracha, tangy garlic pickles, and bold American mustard. This easy-to-make condiment takes your burgers to a whole new level of irresistible flavor!",
  },
  {
    title: "Garlic oil",
    url: "/food-and-drinks/garlic-oil",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/garlic-oil/thumbnails/hero.jpg"),
      tall: require("../../public/images/recipes/garlic-oil/thumbnails/tall.jpg"),
      wide: require("../../public/images/recipes/garlic-oil/thumbnails/wide.jpg"),
      square: require("../../public/images/recipes/garlic-oil/thumbnails/square.png"),
      meta: require("../../public/images/recipes/garlic-oil/thumbnails/meta.png"),
    },
    description:
      "This garlic infused oil is perfect to drizzle on top of your pizza, or just dip a freshly baked piece of bread in. Don't use your fancy olive oil for this, use something cheap since the garlic flavor is very intense.",
  },
  {
    title: "Rasberry fudge",
    url: "/food-and-drinks/rasberry-fudge",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/rasberry-fudge/thumbnails/hero.jpg"),
      tall: require("../../public/images/recipes/rasberry-fudge/thumbnails/tall.jpg"),
      wide: require("../../public/images/recipes/rasberry-fudge/thumbnails/wide.jpg"),
      square: require("../../public/images/recipes/rasberry-fudge/thumbnails/square.png"),
      meta: require("../../public/images/recipes/rasberry-fudge/thumbnails/meta.png"),
    },
    description:
      "A refreshing cocktail inspired by Swedish bartender Jimmy Dymott, but with a few tweaks. Savor the delightful combination of sweet raspberries, rich fudge, and a hint of vanilla in this easygoing, flavorsome creation. Perfect for those warm-weather gatherings or simply to unwind and enjoy.",
  },
  {
    title: "Alabama Slammer",
    url: "/food-and-drinks/alabama-slammer",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/alabama-slammer/thumbnails/hero.jpg"),
      tall: require("../../public/images/recipes/alabama-slammer/thumbnails/tall.jpg"),
      wide: require("../../public/images/recipes/alabama-slammer/thumbnails/wide.jpg"),
      square: require("../../public/images/recipes/alabama-slammer/thumbnails/square.png"),
      meta: require("../../public/images/recipes/alabama-slammer/thumbnails/meta.png"),
    },
    description:
      "Meet the Alabama Slammer, a refreshing cocktail with a sports twist! Combining vodka, grenadine, Southern Comfort, Amaretto, and orange juice, it delivers a lively fusion of flavors. Rumor has it, quarterback Brett Favre made it famous. Mix up this spirited drink, and cheers to good times!",
  },
  {
    title: "Buffalo Chicken Wing Sauce",
    url: "/food-and-drinks/buffalo-chicken-wing-sauce",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/buffalo-chicken-wing-sauce/thumbnails/hero.jpg"),
      tall: require("../../public/images/recipes/buffalo-chicken-wing-sauce/thumbnails/tall.jpg"),
      wide: require("../../public/images/recipes/buffalo-chicken-wing-sauce/thumbnails/wide.jpg"),
      square: require("../../public/images/recipes/buffalo-chicken-wing-sauce/thumbnails/square.png"),
      meta: require("../../public/images/recipes/buffalo-chicken-wing-sauce/thumbnails/meta.png"),
    },
    description:
      "Get ready to rock your taste buds with this wickedly tasty sauce, perfect for taking your chicken wings to new heights. This easy, lip-smacking recipe delivers a flavor explosion with every bite.",
  },
  {
    title: "Jalapeño dip",
    url: "/food-and-drinks/jalapeno-dip",
    category: CATEGORIES["food-and-drinks"],
    thumbnails: {
      hero: require("../../public/images/recipes/jalapeno-dip/thumbnails/hero.png"),
      tall: require("../../public/images/recipes/jalapeno-dip/thumbnails/tall.png"),
      wide: require("../../public/images/recipes/jalapeno-dip/thumbnails/wide.png"),
      square: require("../../public/images/recipes/jalapeno-dip/thumbnails/square.png"),
      meta: require("../../public/images/recipes/jalapeno-dip/thumbnails/meta.png"),
    },
    description:
      "This dip, with its zesty jalapeño and hint of garlic, is the perfect spicy, creamy addition to your tacos and nachos. Or any snack craving a little heat.",
  },
];
