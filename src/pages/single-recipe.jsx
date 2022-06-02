import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRelatedRecipe } from "../api/recipes";
import NoAvailable from "../components/noAvailable";
import Related from "../components/related";
import "../styles/single-recipe.css";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../actions";

function SingleRecipe({ recipeInfo, bookmarks, dispatch }) {
  const [relatedRecipe, setRelatedRecipe] = useState([]);
  const {
    id,
    image,
    dishTypes,
    title,
    extendedIngredients: ingredients,
    analyzedInstructions: instructions,
  } = recipeInfo;

  useEffect(() => {
    getRelatedRecipe(id).then((data) => setRelatedRecipe(data));
  }, []);

  const addBookmark = () => {
    if (bookmarks.includes(id)) {
      dispatch({ type: REMOVE_BOOKMARK, payload: id });
    } else {
      dispatch({ type: ADD_BOOKMARK, payload: id });
    }
  };

  return (
    <div className="single-recipe">
      <div className="recipe-details">
        <img className="recipe-image" src={image} alt="recipe image" />
        <div className="dish-type">
          {dishTypes?.map((dishType, i) => (
            <p key={i}>{dishType}</p>
          ))}
        </div>
        <div className="ingredients">
          <h3>ingrendients</h3>
          {ingredients?.map((ingredient, i) => (
            <p key={i}>{ingredient.original}</p>
          ))}
        </div>
      </div>
      <div>
        <div className="instructions">
          <h1>{title}</h1>
          <div onClick={() => addBookmark()} className="bookmark">
            {bookmarks.includes(id) ? <FaBookmark /> : <FaRegBookmark />}
          </div>
          <h3>instructions</h3>
          {instructions?.length > 0 ? (
            instructions[0].steps.map(({ number, step }, i) => {
              return (
                <div key={i} className="instruction">
                  <h4>{number}</h4>
                  <p>{step}</p>
                </div>
              );
            })
          ) : (
            <NoAvailable />
          )}
        </div>
        <div>
          <h3>related Recipe</h3>
          <div className="related-recipe">
            {relatedRecipe.map(({ id }, i) => {
              return <Related key={i} id={id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect((state) => state)(SingleRecipe);
