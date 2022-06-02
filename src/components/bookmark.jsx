import React, { useEffect, useState } from "react";
import { getSingleRecipe } from "../api/recipes";
import { FaBookmark } from "react-icons/fa";
import { REMOVE_BOOKMARK } from "../actions";
import { connect } from "react-redux";

function Bookmark({ id, dispatch, bookmarks }) {
  const [recipe, setRecipe] = useState({});
  const { image, sourceUrl, title } = recipe;

  useEffect(() => {
    getSingleRecipe(id).then((data) => setRecipe(data));
  }, [bookmarks]);

  const removeBookmark = () => {
    dispatch({ type: REMOVE_BOOKMARK, payload: id });
  };

  return (
    <div className="bookmark-item">
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <FaBookmark
          onClick={() => removeBookmark()}
          style={{ color: "green", marginLeft: "10px" }}
        />
        <br />
        <a className="recipe-link" href={sourceUrl}>
          {sourceUrl}
        </a>
      </div>
    </div>
  );
}

export default connect((state) => state)(Bookmark);
