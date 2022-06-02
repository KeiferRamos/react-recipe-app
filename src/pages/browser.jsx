import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/browser.css";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { autocompleteSearch, getSingleRecipe } from "../api/recipes.js";
import { GET_RECIPE } from "../actions.js";
import { connect } from "react-redux";

function Browser({ dispatch }) {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    autocompleteSearch(searchText).then((data) => setRecommended(data));
  }, [searchText]);

  const navigateUser = (id) => {
    getSingleRecipe(id).then((data) => {
      dispatch({ type: GET_RECIPE, payload: data });
      window.scrollTo(0, 0);
      navigate("/recipe");
    });
  };

  return (
    <div className="browser">
      <div className="search-field">
        <FaArrowLeft onClick={() => navigate(-1)} />
        <input
          type="text"
          placeholder="e.g. chicken salad"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FaSearch />
      </div>
      <div className="recommended">
        {recommended.map(({ id, title }, i) => {
          return (
            <p key={i} onClick={() => navigateUser(id)}>
              {title}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default connect((state) => state)(Browser);
