import React, { useEffect, useState } from "react";
import { getSingleRecipe } from "../api/recipes";
import { REMOVE_BOOKMARK, GET_RECIPE } from "../actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Bookmark({ id, dispatch, bookmarks }) {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});
  const { image, title } = recipe;

  useEffect(() => {
    getSingleRecipe(id).then((data) => setRecipe(data));
  }, [bookmarks]);

  const showSingleRecipe = ({ target }) => {
    if (target.className == "remove-btn") {
      dispatch({ type: REMOVE_BOOKMARK, payload: id });
    } else {
      window.scrollTo(0, 0);
      dispatch({ type: GET_RECIPE, payload: recipe });
      navigate("/recipe");
    }
  };

  return (
    <div className="bookmark-item" onClick={(e) => showSingleRecipe(e)}>
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <button className="remove-btn">remove</button>
      </div>
    </div>
  );
}

export default connect((state) => state)(Bookmark);
