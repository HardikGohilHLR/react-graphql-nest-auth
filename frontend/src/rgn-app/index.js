// RGN - App
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './routes/protected-route';

import Login from './auth/login';
import Dashboard from './dashboard';

const RGNApp = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route exact path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </React.Fragment>
    )
}

export default RGNApp;
