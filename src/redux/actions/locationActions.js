import {
  getLocations,
  postLocation,
  putUpdateWeather,
  deleteLocation as deleteLocApi
} from '../../api/weatherBackend';

export const fetchLocations = () => async (dispatch) => {
  dispatch({ type: 'FETCH_LOCATIONS_REQUEST' });
  try {
    const resp = await getLocations();
    dispatch({ type: 'FETCH_LOCATIONS_SUCCESS', payload: resp.data });
  } catch (err) {
    dispatch({ type: 'FETCH_LOCATIONS_FAILURE', error: err.message || 'Could not fetch locations' });
  }
};

export const addLocation = (name) => async (dispatch) => {
  dispatch({ type: 'ADD_LOCATION_REQUEST' });
  try {
    const resp = await postLocation(name);
    dispatch({ type: 'ADD_LOCATION_SUCCESS', payload: resp.data });
  } catch (err) {
    let msg = err.response?.data || err.message;
    dispatch({ type: 'ADD_LOCATION_FAILURE', error: msg });
  }
};

export const updateLocationWeather = (id) => async (dispatch) => {
  dispatch({ type: 'UPDATE_LOCATION_REQUEST' });
  try {
    const resp = await putUpdateWeather(id);
    dispatch({ type: 'UPDATE_LOCATION_SUCCESS', payload: resp.data });
  } catch (err) {
    let msg = err.response?.data || err.message;
    dispatch({ type: 'UPDATE_LOCATION_FAILURE', error: msg });
  }
};

export const deleteLocation = (id) => async (dispatch) => {
  dispatch({ type: 'DELETE_LOCATION_REQUEST' });
  try {
    await deleteLocApi(id);
    dispatch({ type: 'DELETE_LOCATION_SUCCESS', payload: id });
  } catch (err) {
    let msg = err.response?.data || err.message;
    dispatch({ type: 'DELETE_LOCATION_FAILURE', error: msg });
  }
};
