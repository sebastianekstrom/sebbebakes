export type MichelinRating = 1 | 2 | 3 | "Bib";

interface Chef {
  name: string;
  description: string | null;
}

interface Ratings {
  michelin?: MichelinRating;
  "m&o"?: number;
}

interface Coordinates {
  longitude: number;
  latitude: number;
}

export interface Restaurant {
  name: string;
  coordinates: Coordinates;
  image: string;
  ratings?: Ratings;
  chefs?: Chef[];
  description: string;
  website: string;
}

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Bar Agrikultur",
    coordinates: {
      longitude: 18.0833116,
      latitude: 59.3128813,
    },
    ratings: {
      michelin: "Bib",
      "m&o": 9.5,
    },
    chefs: [
      {
        name: "Filip Fastén",
        description: "Winner of the Swedish 'Chef of the year'",
      },
      {
        name: "Joel Åhlin",
        description: "Previously at Agrikultur",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/agrikultur.jpg"),
    description:
      "Modern interpretations of classic Swedish small plates, using seasonal and locally sourced ingredients.",
    website: "https://baragrikultur.com",
  },
  {
    name: "Aloë",
    coordinates: {
      longitude: 17.9854555,
      latitude: 59.2842603,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/aloe.jpg"),
    ratings: {
      michelin: 2,
      "m&o": 10,
    },
    chefs: [
      {
        name: "Daniel Höglander",
        description: null,
      },
      {
        name: "Niclas Jönsson",
        description: null,
      },
    ],
    description:
      "Tasting menu featuring the finest European ingredients prepared with global influences, resulting in intense flavors and original combinations",
    website: "http://aloerestaurant.se/",
  },
  {
    name: "Punk Royale",
    coordinates: {
      longitude: 18.0875824,
      latitude: 59.3154739,
    },
    ratings: {
      "m&o": 10,
    },
    chefs: [
      {
        name: "Joakim Almqvist",
        description: null,
      },
      {
        name: "Kalle Nilsson",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/punk-royale.jpg"),
    description:
      "Offers a provocative tasting menu that blends luxury ingredients with playful presentation, featuring dishes like caviar with vodka shots and foie gras served in unconventional ways. ",
    website: "https://punkroyale.se/punk-royale-sthlm",
  },
  {
    name: "Miyakodori",
    coordinates: {
      longitude: 18.0539402,
      latitude: 59.3368766,
    },
    ratings: {
      "m&o": 8.5,
    },
    chefs: [
      {
        name: "Max Westerlund Inazawa",
        description: "Previously at Frantzén",
      },
      {
        name: "John Forsell",
        description: "Previously at Restaurang AG, Rolfs Kök",
      },
      {
        name: "Lars Brennwald",
        description: "Previously at Frantzén, Adam/Albin",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/miyakodori.jpg"),
    description:
      "Japanese izakaya featuring a variety of grilled skewers, including meat, fish, and vegetarian options, alongside small dishes like salmon sashimi and deep-fried kara-age chicken.",
    website: "https://miyakodori.se/",
  },
  {
    name: "Hantverket",
    coordinates: {
      longitude: 18.0766794,
      latitude: 59.3414547,
    },
    chefs: [{ name: "Stefan Ekengren", description: null }],
    ratings: {
      "m&o": 8.5,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/hantverket.jpg"),
    description:
      "The menu emphasizes seasonal Swedish ingredients, offering medium-sized dishes that blend rustic and elegant flavors.",
    website: "http://restauranghantverket.se/",
  },
  {
    name: "Woodstockholm",
    coordinates: {
      longitude: 18.0749719,
      latitude: 59.3177645,
    },
    ratings: {
      "m&o": 8,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/woodstockholm.jpg"),
    description:
      "Offers a themed menu that changes every two months, focusing on organically produced food and wine. The ambiance is intimate and cozy, featuring handcrafted furnishings and a vibrant atmosphere.",
    website: "http://www.woodstockholm.com/",
  },
  {
    name: "Restaurant AG",
    coordinates: {
      longitude: 18.0346802,
      latitude: 59.3352467,
    },
    ratings: {
      "m&o": 8,
    },
    chefs: [
      {
        name: "Johan Jureskog",
        description: "Rolfs Kök",
      },
      {
        name: "Klas Ljungqvist",
        description: "Rolfs Kök",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/ag.jpg"),
    description:
      "Renowned steakhouse specializing in premium meats, Restaurang AG offers a diverse selection of cuts, dry-aged in-house, complemented by classic side dishes.",
    website: "http://www.restaurangag.se/",
  },
  {
    name: "Barbro",
    coordinates: {
      longitude: 18.033092,
      latitude: 59.314362,
    },
    ratings: {
      "m&o": 7.5,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/barbro.jpg"),
    description:
      "Asian fusion offering a menu featuring sushi, dumplings, and other Asian-inspired dishes, all designed for sharing.",
    website: "http://bar-bro.se/",
  },
  {
    name: "Rolfs Kök",
    coordinates: {
      longitude: 18.056967,
      latitude: 59.3387009,
    },
    ratings: {
      "m&o": 7,
    },
    chefs: [
      {
        name: "Johan Jureskog",
        description: null,
      },
      {
        name: "Klas Ljungquist",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/rolfs-kok.jpg"),
    description:
      "Modern bistro focusing on simplicity and high-quality ingredients, featuring dishes like confit pork belly and reindeer schnitzel.",
    website: "https://rolfskok.se/",
  },
  {
    name: "Brasseri Astoria",
    coordinates: {
      longitude: 18.0772553,
      latitude: 59.3348538,
    },
    ratings: {
      "m&o": 6.5,
    },
    chefs: [
      {
        name: "Björn Frantzén",
        description: "Frantzén, Zén, FZN",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/astoria.jpg"),
    description:
      "Housed in the meticulously restored former Astoria Cinema from the 1870s, Brasserie Astoria offers a menu of modern brasserie classics with occasional Asian influences, utilizing quality produce.",
    website: "https://www.brasserieastoria.com/",
  },
  {
    name: "Yono Sabo",
    coordinates: {
      longitude: 18.0618303,
      latitude: 59.3392377,
    },
    ratings: {
      "m&o": 6,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/yonosabo.jpg"),
    description:
      "Mexican street food bistro offering a menu featuring tacos, burritos, and bowls, with influences from Asian cuisines, served in a cozy and vibrant atmosphere.",
    website: "https://www.yonosabo.se",
  },
  {
    name: "Babette",
    coordinates: {
      longitude: 18.0615475,
      latitude: 59.344882,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/babette.jpg"),
    ratings: {
      michelin: "Bib",
      "m&o": 8,
    },
    chefs: [
      {
        name: "Olle T Cellton",
        description: "Previously at restaurant Niklas",
      },
      {
        name: "Fredrik Lundberg",
        description: "Previously at restaurant Gaston",
      },
    ],
    description:
      "Wood-fired pizzas and small plates with Southern European influences in an intimate and lively setting.",
    website: "https://babette.se/",
  },
  {
    name: "Dashi",
    coordinates: {
      longitude: 18.0657924,
      latitude: 59.3426531,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Harry Jordås",
        description: null,
      },
      {
        name: "Nathan Turley",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/dashi.jpg"),
    description:
      "Offers an 'osusume' tasting menu that highlights seasonal Swedish produce, with dishes featuring the eponymous dashi broth. The dining experience is complemented by a varied sake list, all within a minimalist setting that reflects both Nordic and Japanese design aesthetics.",
    website: "https://dashisthlm.se/",
  },
  {
    name: "Lilla Ego",
    coordinates: {
      longitude: 18.0454852,
      latitude: 59.3436373,
    },
    ratings: {
      michelin: "Bib",
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/lilla-ego.jpg"),
    chefs: [
      {
        name: "Daniel Räms",
        description: null,
      },
      {
        name: "Tom Sjöstedt",
        description: null,
      },
    ],
    description:
      "Modernized Swedish classics, featuring robust and well-composed dishes that deliver on flavor.",
    website: "https://babette.se/",
  },
  {
    name: "Allegrine",
    coordinates: {
      longitude: 18.0610728,
      latitude: 59.3390253,
    },
    ratings: {
      michelin: "Bib",
    },
    chefs: [
      {
        name: "Danyel Couet",
        description: "Previously at Manufacture",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/allegrine.jpg"),
    description:
      "Menu rooted in classic French cuisine, featuring dishes such as gaufrette with potato and caviar, and steak tartare with foie gras and truffle brioche, all served in a chic and intimate setting.",
    website: "http://allegrine.se/",
  },
  {
    name: "Ekstedt",
    coordinates: {
      longitude: 18.0748854,
      latitude: 59.3367645,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Niklas Ekstedt",
        description: "Previously at El Bulli",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/ekstedt.jpg"),
    description:
      "A unique dining experience where all dishes are prepared using traditional Nordic techniques over open flames, without the use of electricity or gas",
    website: "http://www.ekstedt.nu/",
  },
  {
    name: "Seafood Gastro",
    coordinates: {
      longitude: 18.0762633,
      latitude: 59.3293149,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Mathias Dahlgren",
        description: "Winner of Bocuse d'Or. Matsalen, Rutabaga and Bon Lloc.",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/seafood.jpg"),
    description:
      "Exclusive tasting menu centered around premium aquatic ingredients, including fish, shellfish, seaweed, and seabirds, all prepared with skillful techniques and subtle Japanese influences.",
    website: "https://mdghs.se/en/seafood-gastro/",
  },
  {
    name: "Celeste",
    coordinates: {
      longitude: 18.0573847,
      latitude: 59.3166183,
    },
    chefs: [
      { name: "Jonas Lagerström", description: "Etoile" },
      { name: "Rachel Wennemo", description: "Etoile" },
    ],
    ratings: {
      michelin: 2,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/celeste.jpg"),
    description:
      "Celeste offers a modern tasting menu that evolves with the seasons, showcasing precision and balance in each dish, such as their tartlet filled with Swedish beef tartare.",
    website: "http://www.celesterestaurant.se",
  },
  {
    name: "Aira",
    coordinates: {
      longitude: 18.1235938,
      latitude: 59.3208925,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/aira.jpg"),
    ratings: {
      michelin: 2,
    },
    chefs: [
      {
        name: "Tommy Myllymäki",
        description: "Previously at restaurant Niklas",
      },
      {
        name: "Pi Le",
        description: "Gold winner with the junior national chef team",
      },
    ],
    description:
      "Seasonal tasting menu that combines Nordic ingredients with global techniques, served in a strikingly designed space near Royal Djurgården.",
    website: "https://babette.se/",
  },
  {
    name: "Bar Montan",
    coordinates: {
      longitude: 18.0785809,
      latitude: 59.2924085,
    },
    chefs: [
      {
        name: "Johan Montan Ahlgren",
        description: null,
      },
      {
        name: "Öner Kulbay",
        description: null,
      },
      {
        name: "Max Duhs",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/bar-montan.jpg"),
    description:
      "Modern European cuisine with a focus on seasonal and sustainable ingredients. The menu blends Nordic simplicity with Mediterranean flavors, featuring fresh seafood, grilled meats, and vibrant vegetable dishes.",
    website: "http://barmontan.com/",
  },
  {
    name: "RiRi",
    coordinates: {
      longitude: 18.0305846,
      latitude: 59.3153111,
    },
    chefs: [
      {
        name: "Elias Kvarning",
        description: "Previously at Fäviken, Magasinet and Ett Hem",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/riri.jpg"),
    description:
      "Mediterranean-inspired menu that changes frequently, with dishes prepared over an open flame.",
    website: "https://riri.restaurant/",
  },
  {
    name: "Washoku TOMO",
    coordinates: {
      longitude: 18.0598619,
      latitude: 59.318761,
    },
    chefs: [
      {
        name: "Tomoko Hayashi",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/washoku.jpg"),
    description:
      "Omakase sushi kaiseki course, featuring approximately 16-17 servings, including small dishes, nigiri, soup, and dessert. The menu emphasizes seasonal ingredients, with seafood sourced globally, such as Spanish sea bass, Argentinian prawns, and Canadian black cod.",
    website: "https://www.washokutomo.se/",
  },
  {
    name: "Noema",
    coordinates: {
      longitude: 18.0644833,
      latitude: 59.3423098,
    },
    chefs: [
      {
        name: "Acki Kokotos",
        description: "Previously at Un poco and Balzac",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/noema.jpg"),
    description:
      "Blends luxury and warmth in the iconic Wallenstam building, offering refined small plates and premium meats in a lively setting. Expertly crafted dishes and a vibrant atmosphere make it a top Stockholm dining spot.",
    website: "http://noemastockholm.se/",
  },
  {
    name: "Mormors Dumplings",
    coordinates: {
      longitude: 18.0853485,
      latitude: 59.3135728,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/mormor.jpg"),
    description:
      "Features a variety of dumplings, hotpots, and traditional dishes like Kung Pao chicken, all served in a cozy and genuine atmosphere.",
    website:
      "https://www.instagram.com/explore/locations/7654195/mormors-dumplings/?hl=en",
  },
  {
    name: "Essence",
    coordinates: {
      longitude: 18.0057876,
      latitude: 59.332306,
    },
    chefs: [
      {
        name: "Stefan Taylor",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/essence.jpg"),
    description:
      "A 10-seat chef's table concept, guests are served a set tasting menu that evolves daily, showcasing innovative dishes prepared in an open kitchen.",
    website: "http://www.restaurantessence.com/",
  },
  {
    name: "Ergo",
    coordinates: {
      longitude: 18.0809041,
      latitude: 59.3337489,
    },
    chefs: [
      {
        name: "Petter Johansson",
        description: "Previously at Frantzén, Per Se and Bon Lloc",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/ergo.jpg"),
    description:
      "Modern fine dining experience with a seasonal 5-course evening menu and a 3-course prix fixe lunch menu, both showcasing French culinary techniques and seasonal ingredients.",
    website: "https://www.restaurantergo.se",
  },
  {
    name: "Freyja + Söder",
    coordinates: {
      longitude: 18.068535,
      latitude: 59.3198064,
    },
    chefs: [
      {
        name: "Emma Shields",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/freja.jpg"),
    description:
      "Swedish cuisine with international influences and features panoramic views of Stockholm in a vibrant atmosphere.",
    website: "https://freyjasoder.se/",
  },
  {
    name: "Ärla",
    coordinates: {
      longitude: 18.0705407,
      latitude: 59.3444745,
    },
    chefs: [
      {
        name: "Patric Blomquist",
        description: "Previously at Hybrid",
      },
      {
        name: "Lotta Karlsson",
        description: "Previously at Hybrid",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/arla.jpg"),
    description:
      "Handcrafted dishes focusing on seasonal ingredients, blending fine dining quality with a cozy neighborhood bistro atmosphere.",
    website: "https://www.restaurangaerla.se/",
  },
  {
    name: "Racamaca",
    coordinates: {
      longitude: 18.0638492,
      latitude: 59.3168579,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/racamaca.jpg"),
    description:
      "Racamaca offers a menu inspired by Basque cuisine, featuring pintxos and small dishes such as garbanzo beans, boquerones, and chistorra sausage. The ambiance is intimate and lively, complemented by a curated selection of wines and beers.",
    website: "http://www.racamaca.se/",
  },
  {
    name: "Café Nizza",
    coordinates: {
      longitude: 18.086638,
      latitude: 59.3146593,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/nizza.jpg"),
    description:
      "Offers a menu blending French and Italian culinary traditions, featuring dishes such as 'Fermentata cacio e pepe' and 'Agnolotti with ricotta, capers & taggiasca olives'.",
    website: "http://www.cafenizza.se/",
  },
  {
    name: "Slipen",
    coordinates: {
      longitude: 18.1016014,
      latitude: 59.3223377,
    },
    chefs: [
      {
        name: "David Zetterström",
        description: null,
      },
      {
        name: "Lotta Zetterström",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/slipen.jpg"),
    description:
      "Menu inspired by European cuisine, featuring hearty and uncomplicated dishes such as oysters, tartare, bone-in beef, and cod loin.",
    website: "https://slipen.se/",
  },
  {
    name: "Persona",
    coordinates: {
      longitude: 18.0889679,
      latitude: 59.3331662,
    },
    chefs: [
      { name: "Louis Cespedes", description: "Previously at Frantzén" },
      { name: "Jonathan Nyström", description: "Previously at Frantzén" },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/persona.jpg"),
    description:
      "Modern cuisine with bold flavors, featuring both an à la carte menu and a fixed tasting menu that can be tailored based on guests' wine selections.",
    website: "https://www.personasthlm.com",
  },
  {
    name: "Coco & Carmen",
    coordinates: {
      longitude: 18.0912942,
      latitude: 59.333022,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/coco-carmen.jpg"),
    description:
      "From the team behind Punk Royale, Coco & Carmen offers a fixed tasting menu that blends European cuisine with Scandinavian and Japanese influences.",
    website: "https://cococarmen.se",
  },
  {
    name: "MISSHUMASSHU",
    coordinates: {
      longitude: 18.0738881,
      latitude: 59.3338151,
    },
    chefs: [
      {
        name: "Adam Dahlberg",
        description: "Adam/Albin, Solen",
      },
      {
        name: "Albin Wessman",
        description: "Adam/Albin, Solen",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/misshumashu.jpg"),
    description:
      "Fusion menu blending Japanese flavors with international street food, featuring dishes like skewers, ramen, and creative small plates.",
    website: "https://misshumasshu.se",
  },
  {
    name: "E&G",
    coordinates: {
      longitude: 18.0607129,
      latitude: 59.3479443,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/eg.jpg"),
    description:
      "Rustic European-inspired dishes that change regularly to highlight seasonal ingredients. Offerings range from snacks and small plates to more substantial dishes, catering to both vegetarians and meat lovers.",
    website: "http://www.eochg.se/",
  },
  {
    name: "Bar Nîmes",
    coordinates: {
      longitude: 18.0654578,
      latitude: 59.342484,
    },
    chefs: [
      {
        name: "Kim Öhman",
        description: "Previously at Farang",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/bar-nimes.jpg"),
    description:
      "Southern French and Italian cuisines, featuring classic dishes such as Vitello Tonnato, Panzanella, and Tajarin.",
    website: "http://bar-nimes.se/",
  },
  {
    name: "Brutalisten",
    coordinates: {
      longitude: 18.0674926,
      latitude: 59.3357663,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/brutalisten.jpg"),
    description:
      "Offers a menu categorized into 'Orthodox Brutalist,' 'Brutalist,' and 'Semi-Brutalist' dishes, each adhering to varying degrees of minimalism by using single ingredients prepared with minimal or no additions.",
    website: "http://www.brutalisten.com/",
  },
  {
    name: "Nour",
    coordinates: {
      longitude: 18.0712948,
      latitude: 59.3357595,
    },
    chefs: [
      {
        name: "Sayan Isaksson",
        description: "Previously at Esperanto and Imouto",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/nour.jpg"),
    description:
      "Contemporary fusion of Nordic and Japanese cuisines, utilizing seasonal Swedish ingredients to craft innovative tasting menus.",
    website: "http://www.restaurantnour.se/",
  },
  {
    name: "Främmat",
    coordinates: {
      longitude: 18.0453042,
      latitude: 59.3422275,
    },
    chefs: [
      {
        name: "Kalle Nilsson",
        description: "Previously at Punk Royale",
      },
      {
        name: "Jonas Helgesson",
        description: "Previously at Adam/Albin",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/frammat.jpg"),
    description:
      "Dynamic menu rooted in classic French cuisine, complemented by innovative and creative dishes that evolve regularly.",
    website: "https://frammat.com",
  },
  {
    name: "Chez Jolie",
    coordinates: {
      longitude: 18.0763805,
      latitude: 59.3339065,
    },
    chefs: [
      {
        name: "Mikael Einarsson",
        description: "Previously at Djuret and Astoria",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/chez-jolie.jpg"),
    description:
      "Inspired by both the French countryside and metropolitan bistros, featuring classic dishes like oysters au gratin, crispy fried frogs' legs, pâté en croûte, and crêpe soufflé.",
    website: "https://chezjolie.se",
  },
  {
    name: "Animo",
    coordinates: {
      longitude: 18.0643081,
      latitude: 59.3429635,
    },
    chefs: [
      {
        name: "Daniel Haynes",
        description: "Previously in the Swedish Culinary Team",
      },
      {
        name: "Anders Karlsson",
        description: "Previously in the Swedish Culinary Team",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/animo.jpg"),
    description:
      "Dynamic à la carte menu that evolves with the seasons, emphasizing creativity and spontaneity. The innovative cocktail bar and curated wine list complement the dishes.",
    website: "https://www.animorestaurant.se",
  },
  {
    name: "Rolfs Hav",
    coordinates: {
      longitude: 18.0568469,
      latitude: 59.3385233,
    },
    chefs: [
      {
        name: "Johan Jureskog",
        description: "Restaurang AG, Rolfs Kök",
      },
      {
        name: "Klas Ljungquist",
        description: "Restaurang AG, Rolfs Kök",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/rolfs-hav.jpg"),
    description:
      "Specializing in fresh seafood, Rolfs Hav offers a menu featuring dishes like oysters, caviar, and Skagen, with a focus on cold preparations.",
    website: "https://www.rolfshav.se",
  },
  {
    name: "Forma",
    coordinates: {
      longitude: 18.0344602,
      latitude: 59.3161265,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/forma.jpg"),
    description:
      "Combining French techniques with Asian and Swedish influences, focusing on seasonal and sustainably sourced ingredients.",
    website: "https://www.restaurangforma.se",
  },
  {
    name: "Voisine",
    coordinates: {
      longitude: 18.0904208,
      latitude: 59.3139738,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/voisine.jpg"),
    description:
      "Modern bistro-style dishes with French and Swedish influences, complemented by an extensive wine list.",
    website: "http://www.voisine.se",
  },
  {
    name: "Tengu",
    coordinates: {
      longitude: 18.0694741,
      latitude: 59.3434181,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/tengu.jpg"),
    description:
      "Japanese-inspired food in a minimalist setting. The menu includes small dishes like shiitake skewers, ramen, and hamachi crudo.",
    website: "http://tengu.se",
  },
  {
    name: "Triton",
    coordinates: {
      longitude: 18.0662201,
      latitude: 59.3084311,
    },
    ratings: {
      michelin: "Bib",
      "m&o": 9,
    },
    chefs: [
      {
        name: "Erik Eriksson",
        description: null,
      },
      {
        name: "Patric Kling",
        description: null,
      },
      {
        name: "Saga Söderman",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/triton.jpg"),
    description:
      "Fixed three-course menu that changes frequently, focusing on high-quality ingredients, in a cozy, homely atmosphere.",
    website: "https://www.triton.restaurant",
  },
  {
    name: "Tegelbacken",
    coordinates: {
      longitude: 18.063029,
      latitude: 59.3283298,
    },
    ratings: {
      "m&o": 7,
    },
    chefs: [
      {
        name: "Markus Aujalay",
        description: "Chef of the Year (2004), previously at Operakällaren",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/tegelbacken.jpg"),
    description:
      "European-inspired small plates in a warm, colorful setting with a touch of glamour.",
    website: "http://tegelbacken.com/",
  },
  {
    name: "Tjoget",
    coordinates: {
      longitude: 18.0348638,
      latitude: 59.3161676,
    },
    ratings: {
      "m&o": 5.5,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/tjoget.jpg"),
    description:
      "Hip eatery with a cafe & a wine bar serving Mediterranean-inspired dishes in an industrial ambiance.",
    website: "http://tjoget.com/",
  },
  {
    name: "DoMa",
    coordinates: {
      longitude: 18.0810174,
      latitude: 59.3389821,
    },
    ratings: {
      "m&o": 8,
    },
    chefs: [
      {
        name: "Tea Malmegård",
        description: "Previously at Edsbacka Krog",
      },
      {
        name: "Viktor Lejon",
        description: "Previously at Edsbacka Krog",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/doma.jpg"),
    description:
      "European and Scandinavian-inspired dishes in a cozy and lively atmosphere.",
    website: "https://www.doma.se/restaurangen",
  },
  {
    name: "Solen",
    coordinates: {
      longitude: 18.0778464,
      latitude: 59.2921392,
    },
    ratings: {
      "m&o": 8,
    },
    chefs: [
      {
        name: "Adam Dahlberg",
        description: "Adam/Albin, MISSHUMASSHU",
      },
      {
        name: "Albin Wessman",
        description: "Adam/Albin, MISSHUMASSHU",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/solen.jpg"),
    description:
      "Fire-cooked dishes with influences from the Mediterranean, Middle East, and South America in a lively, casual setting.",
    website: "https://www.solen.se",
  },
  {
    name: "Minh Mat",
    coordinates: {
      longitude: 18.0414414,
      latitude: 59.3407248,
    },
    ratings: {
      "m&o": 7,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/minh-mat.jpg"),
    description:
      "Charming Vietnamese restaurant pairs nostalgic decor with a relaxed atmosphere, serving flavorful dishes like quality grilled prawns with a smooth cream of corn sauce.",
    website: "http://minhmat.se/",
  },
  {
    name: "Adam/Albin",
    coordinates: {
      longitude: 18.0661549,
      latitude: 59.3430771,
    },
    chefs: [
      {
        name: "Adam Dahlberg",
        description: "Solen, MISSHUMASSHU",
      },
      {
        name: "Albin Wessman",
        description: "Solen, MISSHUMASSHU",
      },
    ],
    ratings: {
      michelin: 1,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/adam-albin.jpg"),
    description:
      "Tasting menu that showcases luxury Nordic produce with global influences, featuring dishes like artichoke barigoule and mushroom chawanmushi.",
    website: "http://adamalbin.se",
  },
];
