import React, { useEffect, useState } from "react";
import { getSingleRecipe } from "../api/recipes";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_RECIPE } from "../actions";

function RelatedRecipe({ id, dispatch }) {
  const navigate = useNavigate();
  const [relatedRecipe, setRelatedRecipe] = useState([]);
  const { image, title } = relatedRecipe;

  useEffect(() => {
    getSingleRecipe(id).then((data) => setRelatedRecipe(data));
  }, []);

  const navigateUser = () => {
    getSingleRecipe(relatedRecipe.id).then((data) => {
      dispatch({ type: GET_RECIPE, payload: data });
      window.scrollTo(0, 0);
      navigate("/recipe");
    });
  };

  return (
    <div className="related" onClick={() => navigateUser()}>
      <img src={image} alt="" />
      <h4>{title}</h4>
    </div>
  );
}

export default connect((state) => state)(RelatedRecipe);
