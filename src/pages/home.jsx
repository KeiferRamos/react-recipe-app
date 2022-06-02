import React from "react";
import MoreInfo from "../components/info";
import Overview from "../components/overview";
import Slider from "../components/usecase";
import { foodInfo, useCases } from "../data";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <Overview />
      <div className="image">
        <img
          src="https://spoonacular.com/application/frontend/images/food-api/ontology2.svg"
          className="overview-img"
        />
      </div>
      <div className="other-infos">
        <div className="know-more">
          {foodInfo.map((info, i) => {
            return <MoreInfo key={i} {...info} />;
          })}
        </div>
        <Slider useCases={useCases} />
      </div>
    </div>
  );
}

export default Home;
