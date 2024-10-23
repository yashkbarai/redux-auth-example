import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './redux/authSlice';
import './styles.css';

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
