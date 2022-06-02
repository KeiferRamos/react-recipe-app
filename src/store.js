import { createStore } from "redux";
import reducer from "./reducer";

let item = localStorage.getItem("recipe");
let bookmark = localStorage.getItem("bookmark");

const initialStore = {
  screenWidth: window.innerWidth,
  recipes: [],
  recipeInfo: item ? JSON.parse(item) : {},
  bookmarks: bookmark ? JSON.parse(bookmark) : [],
};

export default createStore(reducer, initialStore);
