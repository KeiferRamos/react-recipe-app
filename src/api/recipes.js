import axios from "axios";

const BASE_URL = "https://api.spoonacular.com/recipes";
const apiKey1 = "ffee34b433b243d3a96eaa930ea5b753";
const apiKey2 = "59d36f54d0a343faba59fc0f95624d73";
const apiKey3 = "f8e0905e29a4400ebef7117e43a9e123";
const apiKey4 = "da044bdec36b43d8be14da497ae54852";

export const getAllRecipes = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/complexSearch?apiKey=${apiKey1}&number=12`
  );

  return data.results;
};

export const getSingleRecipe = async (id) => {
  const { data } = await axios.get(
    `${BASE_URL}/${id}/information?apiKey=${apiKey2}`
  );

  return data;
};

export const getRelatedRecipe = async (id) => {
  const { data } = await axios.get(
    `${BASE_URL}/${id}/similar?apiKey=${apiKey3}&number=4`
  );

  return data;
};

export const autocompleteSearch = async (query) => {
  const { data } = await axios.get(
    `${BASE_URL}/autocomplete?query=${query}&apiKey=${apiKey4}&number=20`
  );

  return data;
};
