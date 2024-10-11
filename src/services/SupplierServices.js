import axios from 'axios';

const BASE_API = 'http://localhost:3080/api/suppliers';

export const getAllSuppliers = () => {
  return axios.get(BASE_API);
};

export const getSupplierById = (id) => {
  return axios.get(`${BASE_API}/${id}`);
};

export const createSupplier = (newSupplier) => {
  return axios.post(BASE_API, newSupplier);
};
