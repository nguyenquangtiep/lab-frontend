import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/staff';

export const listStaff = () => axios.get(REST_API_BASE_URL);

export const createStaff = (staff) => axios.post(REST_API_BASE_URL, staff);

export const getStaff = (staffId) => axios.get(REST_API_BASE_URL + '/' + staffId);

export const updateStaff = (staffId, staff) => axios.put(REST_API_BASE_URL + '/' + staffId, staff);

export const deleteStaff = (staffId) => axios.delete(REST_API_BASE_URL + '/' + staffId);