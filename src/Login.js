import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './redux/authSlice';
import './styles.css';

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        // Simulate an API call
        const user = { username }; // This would typically come from an API
        dispatch(login(user));
        setUsername('');
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
