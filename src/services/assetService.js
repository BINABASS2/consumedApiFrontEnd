import axios from "axios";

const API_URL = "http://localhost:3080/api/assets";

export const getAllAsset = () => axios.get(API_URL);