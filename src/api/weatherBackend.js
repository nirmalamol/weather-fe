import axios from 'axios';

const backend = axios.create({
  baseURL: 'http://localhost:8080/api/locations'
});

export const getLocations = () => backend.get('');
export const postLocation = (name) => backend.post('', { name });
export const putUpdateWeather = (id) => backend.put(`/${id}/weather`);
export const deleteLocation = (id) => backend.delete(`/${id}`);
