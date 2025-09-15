import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // ✅ Correct way to import
import locationReducer from './reducers/locationReducer';

const rootReducer = combineReducers({
  locations: locationReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
