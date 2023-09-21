import axios from "axios";

axios.defaults.baseURL = "https://6488cc440e2469c038fe620e.mockapi.io";

export const fetchCars = async (page) => {
  try {
    const response = await axios.get(`/cars/?&page=${page}&limit=8`);
    return response.data;
  } catch (e) {
    throw e.message;
  }
};

export const getAllCars = async () => {
  try {
    const response = await axios.get("/cars/");
    return response.data;
  } catch (e) {
    throw e.message;
  }
};