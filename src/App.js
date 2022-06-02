import Navbar from "./components/navbar";
import Routes from "./routes";
import "./styles/app.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import { GET_ALL_RECIPES, UPDATE_SCREEN_WIDTH } from "./actions";
import { getAllRecipes } from "./api/recipes";
import { useNavigate } from "react-router-dom";

function App({ dispatch, recipeInfo, bookmarks }) {
  const navigate = useNavigate();
  useEffect(() => {
    const setWidth = () => {
      dispatch({
        type: UPDATE_SCREEN_WIDTH,
        payload: window.innerWidth,
      });
    };
    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    getAllRecipes().then((data) =>
      dispatch({ type: GET_ALL_RECIPES, payload: data })
    );
    navigate("/");
  }, []);

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(recipeInfo));
  }, [recipeInfo]);

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default connect((state) => state)(App);
