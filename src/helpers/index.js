import axios from "axios";

const API_URL = "http://localhost:4000/";

//get shoes
export const getShoes = async () => {
  const shoes = await axios.get(API_URL + `get/shoes`);
  return shoes.data;
};
//get a shoes
export const getShoesById = async (id) => {
  const shoes = await axios.get(API_URL + `get/shoes/${id}`);
  return shoes.data;
};
export const getShoesById = async (id) => {
  const shoes = await axios.get(API_URL + `get/shoes/${id}`);
  return shoes.data;
};
