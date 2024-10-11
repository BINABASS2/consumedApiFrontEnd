import axios from 'axios';

const BASE_API = 'http://localhost:3080/api/staff';

export const getAllStaff = () => {
  return axios.get(BASE_API);
};

export const createStaff = (newStaff) => {
  return axios.post(BASE_API, newStaff);
};

export const getStaffById = (id) => {
  return axios.get(`${BASE_API}/${id}`);
};

// Function to update a staff member
export const updateStaff = (id, updatedStaff) => {
  return axios.put(`${BASE_API}/${id}`, updatedStaff);
};
