import React, { useEffect, useRef, useState } from "react";
import { getSingleRecipe } from "../api/recipes";
import "../styles/recipes.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { GET_RECIPE } from "../actions";

function Recipe({ id, infoID, setinfoID, dispatch }) {
  const summaryRef = useRef(null);
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});
  const [showMore, setShowMore] = useState(false);
  const { image, title, summary } = recipe;

  useEffect(() => {
    getSingleRecipe(id).then((data) => {
      setRecipe(data);
      summaryRef.current.innerHTML = `${data.summary.substring(0, 170)}...`;
    });
  }, []);

  const showRecipeInfo = () => {
    setinfoID(id == infoID ? null : id);
  };

  useEffect(() => {
    if (infoID) {
      if (infoID == id) {
        setShowMore(true);
        summaryRef.current.innerHTML = summary;
      } else {
        setShowMore(false);
        summaryRef.current.innerHTML = `${summary?.substring(0, 170)}...`;
      }
    } else {
      setShowMore(false);
      summaryRef.current.innerHTML = `${summary?.substring(0, 170)}...`;
    }
  }, [infoID]);

  const showSingleRecipe = ({ target }) => {
    if (target.className == "show-more-btn") {
      return;
    }
    window.scrollTo(0, 0);
    dispatch({ type: GET_RECIPE, payload: recipe });
    navigate("/recipe");
  };

  return (
    <div className="recipe" onClick={(e) => showSingleRecipe(e)}>
      <div>
        <img className="recipe-img" src={image} alt="recipe image" />
        <h3 className="recipe-title">{title}</h3>
      </div>
      <div className={`${showMore ? "show-recipe" : ""} summary`}>
        <div ref={summaryRef}></div>
        <button onClick={() => showRecipeInfo()} className="show-more-btn">
          {showMore ? "show less" : "read more"}
        </button>
      </div>
    </div>
  );
}

export default connect((state) => state)(Recipe);
