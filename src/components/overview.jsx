import React from "react";

function Overview() {
  return (
    <div className="overview">
      <div>
        <h1 className="title">The only food Recipe you'll ever need.</h1>
        <p className="details">
          Our knowledge engineers spent years crafting our complex food
          ontology, which allows us to understand the relationships between
          ingredients, recipes, nutrition, allergens, and more.
        </p>
        <p className="details">
          We understand "nut free" muffins can't contain pecans even if the
          recipe doesn't mention "nuts" anywhere! and we automatically determine
          that a recipe with Worcestershire sauce isn't vegetarian we're looking
          at you, anchovies.
        </p>
        <button>
          <a href="https://spoonacular.com/food-api/console#Dashboard">
            sign-up
          </a>
        </button>
      </div>
    </div>
  );
}

export default Overview;
