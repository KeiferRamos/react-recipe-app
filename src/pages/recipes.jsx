import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Recipe from "../components/recipe";
import "../styles/recipes.css";

function Recipes({ recipes }) {
  const [infoID, setinfoID] = useState(null);

  return (
    <div className="recipes">
      {recipes.map((recipe, i) => {
        return (
          <Recipe key={i} {...recipe} infoID={infoID} setinfoID={setinfoID} />
        );
      })}
    </div>
  );
}

export default connect((state) => state)(Recipes);
