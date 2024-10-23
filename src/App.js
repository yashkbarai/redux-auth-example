import React from 'react';
import Login from './Login';
import Logout from './Logout';
import AuthStatus from './AuthStatus';
import './styles.css';

const App = () => {
    return (
        <div>
            <h1>Redux Authentication Example</h1>
            <AuthStatus />
            <Login />
            <Logout />
        </div>
    );
};

export default App;
