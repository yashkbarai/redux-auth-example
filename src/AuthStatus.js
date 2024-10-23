import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

const AuthStatus = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    return (
        <div>
            {isAuthenticated ? (
                <h2>Welcome, {user.username}!</h2>
            ) : (
                <h2>Please log in.</h2>
            )}
        </div>
    );
};

export default AuthStatus;
