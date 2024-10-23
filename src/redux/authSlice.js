// src/redux/authSlice.js
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Initial state
const initialState = {
    isAuthenticated: false,
    user: null,
};

// Auth reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

// Action creators
export const login = (user) => ({ type: LOGIN, payload: user });
export const logout = () => ({ type: LOGOUT });

export default authReducer;
