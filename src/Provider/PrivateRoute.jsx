import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-2xl w-32 h-32"></span>
      </div>
    )
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;