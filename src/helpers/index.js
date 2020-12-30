import axios from "axios";

const API_URL = "http://localhost:4000/";

const API_URL_NEW = "https://5fc9a56e3c1c220016440eab.mockapi.io/";

//get shoes
export const getShoes = async () => {
  const question = await axios.get(API_URL + `get/shoes`);
  return question.data;
};
//get a shoes
export const getShoesById = async (id) => {
  const question = await axios.get(API_URL + `get/shoes/${id}`);
  return question.data;
};
export const getShoesById = async (id) => {
  const question = await axios.get(API_URL + `get/shoes/${id}`);
  return question.data;
};
