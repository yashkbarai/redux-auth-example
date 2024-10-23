import { createStore, combineReducers } from 'redux';
import authReducer from './authSlice';

// Combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
