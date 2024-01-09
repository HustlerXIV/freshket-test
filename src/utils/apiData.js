import axiosInstance from "../middleware/axiosMiddleware";

const BASE_URL = "https://us-central1-freshket-api.cloudfunctions.net/api";

export const fetchData = (endpoint) => {
  return axiosInstance
    .get(`${BASE_URL}/${endpoint}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

export const postData = (endpoint, data) => {
  return axiosInstance
    .post(`${BASE_URL}/${endpoint}`, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};
