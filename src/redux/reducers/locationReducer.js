const initialState = {
  data: [],        // array of location objects
  loading: false,
  error: null
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOCATIONS_REQUEST':
    case 'ADD_LOCATION_REQUEST':
    case 'UPDATE_LOCATION_REQUEST':
    case 'DELETE_LOCATION_REQUEST':
      return { ...state, loading: true, error: null };

    case 'FETCH_LOCATIONS_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'ADD_LOCATION_SUCCESS':
      return { ...state, loading: false, data: [...state.data, action.payload] };
    case 'UPDATE_LOCATION_SUCCESS':
      return {
        ...state,
        loading: false,
        data: state.data.map(loc => (loc.id === action.payload.id ? action.payload : loc))
      };
    case 'DELETE_LOCATION_SUCCESS':
      return { ...state, loading: false, data: state.data.filter(loc => loc.id !== action.payload) };

    case 'FETCH_LOCATIONS_FAILURE':
    case 'ADD_LOCATION_FAILURE':
    case 'UPDATE_LOCATION_FAILURE':
    case 'DELETE_LOCATION_FAILURE':
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default locationReducer;
