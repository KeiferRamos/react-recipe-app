export const foodInfo = [
  {
    name: "Ingredients",
    img: "https://spoonacular.com/application/frontend/images/food-api/landing/vegetarian-food.svg",
    count: "2,600+",
    infos: [
      "price data",
      "cooking tips",
      "health information",
      "substitutions",
      "conversions",
      "mapping to products",
    ],
  },
  {
    name: "Recipes",
    img: "https://spoonacular.com/application/frontend/images/food-api/landing/kitchen.svg",
    count: "5,000+",
    infos: [
      "nutrition analysis",
      "cost breakdown",
      "related recipes",
      "scaling/converting",
      "semantic search",
      "wine pairings",
    ],
  },
  {
    name: "Products",
    img: "https://spoonacular.com/application/frontend/images/food-api/landing/shopping-basket.svg",
    count: "600K+",
    infos: [
      "ingredient analysis",
      "nutrition data",
      "nutrition visualization",
      "descriptions",
      "product comparison",
      "product search",
    ],
  },
  {
    name: "Recipes",
    img: "https://spoonacular.com/application/frontend/images/food-api/landing/hamburger.svg",
    count: "115K+",
    infos: [
      " over 800 American restaurant chains",
      "related recipes",
      "images",
      "descriptions",
      "menu search",
    ],
  },
];

export const useCases = [
  {
    img: "https://spoonacular.com/application/frontend/images/food-api/landing/recipe-analysis.jpg",
    link: {
      name: "Recipe Analysis",
      logo: "https://spoonacular.com/application/frontend/images/food-api/landing/search.svg",
    },
    details: [
      {
        title: "Special Diets/Intolerances",
        detail:
          "We automatically analyze recipes to check for ingredients that contain common allergens, such as wheat, dairy, eggs, soy, nuts, etc. We also determine whether a recipe is vegan, vegetarian, Paleo friendly, Whole30 compliant, and more.",
      },
      {
        title: "Nutritional Information",
        detail:
          "We compute the nutritional information for recipes automatically using a proprietary algorithm. With this information, you can find individual recipes or even create entire meal plans that satisfy your users' dietary goals.",
      },
    ],
  },
  {
    img: "https://spoonacular.com/application/frontend/images/food-api/landing/recipe-management.jpg",
    link: {
      name: "Recipe Management",
      logo: "https://spoonacular.com/application/frontend/images/food-api/landing/box.svg",
    },
    details: [
      {
        title: "Search & Organize",
        detail: `We make it easy to add a recipe search to your app or website - and not just any recipe search. Our semantic search is fast, accurate, and pretty darn smart. "Gluten free nut free dessert without apples"? Easy as pie. Or create your own recipe manager without making your users create tons of tags to find what they're looking for next time. It's all possible.

Have your own recipe database? Great! Let us help you get it under control. With our API, your users will be able to find the recipes they want.`,
      },
    ],
  },
  {
    img: "https://spoonacular.com/application/frontend/images/food-api/landing/meal-planning.jpg",
    link: {
      name: "Meal Planning",
      logo: "https://spoonacular.com/application/frontend/images/food-api/landing/calendar.svg",
    },
    details: [
      {
        title: "Plan your meals",
        detail:
          "Let your users plan their meals for the week using recipes or even your own brand of packaged foods. The daily nutritional information is calculated automatically.",
      },
      {
        title: "Get your shopping list",
        detail:
          "Once your users are done meal planning, they can get their shopping list in a click of the mouse.",
      },
    ],
  },
  {
    img: "https://spoonacular.com/application/frontend/images/food-api/landing/shoppable-recipes.jpg",
    link: {
      name: "Shoppable Recipes",
      logo: "https://spoonacular.com/application/frontend/images/food-api/landing/shopping-basket-white.svg",
    },
    details: [
      {
        title: "Shoppable Recipes",
        detail: `Finally! An all-in-one solution for cooking at home. Your users can pick their recipes and order all the ingredients from an online grocer to have everything delivered or ready for pickup.

Display recipes to inspire visitors when they browse your own packaged foods (whether dips, sauces, pickles, wraps, you name it!) Show them what they can make, and they'll be more likely to purchase.

Have another idea how you want your customers to interact with recipes? Let us help!`,
      },
    ],
  },
];

export const links = [
  { name: "HOME", path: "/" },
  { name: "RECIPES", path: "/recipes" },
  { name: "BOOKMARKS", path: "/bookmarks" },
];
