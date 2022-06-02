import {
  ADD_BOOKMARK,
  GET_ALL_RECIPES,
  GET_RECIPE,
  REMOVE_BOOKMARK,
  UPDATE_SCREEN_WIDTH,
} from "./actions";

export default function reducer(state, { type, payload }) {
  if (type == UPDATE_SCREEN_WIDTH) {
    return { ...state, screenWidth: payload };
  }
  if (type == GET_ALL_RECIPES) {
    return { ...state, recipes: payload };
  }
  if (type == GET_RECIPE) {
    return { ...state, recipeInfo: payload };
  }
  if (type == ADD_BOOKMARK) {
    return { ...state, bookmarks: [...state.bookmarks, payload] };
  }
  if (type == REMOVE_BOOKMARK) {
    return {
      ...state,
      bookmarks: state.bookmarks.filter((item) => item != payload),
    };
  }
  return state;
}
