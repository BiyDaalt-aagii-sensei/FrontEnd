import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
    const isAuthenticated = localStorage.getItem('accessToken') !== null; // Check if user is authenticated

    return isAuthenticated ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/" replace />
    );
};

export default PrivateRoute;
