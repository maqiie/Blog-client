// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// function ProtectedRoute({ element: Component, isAuthenticated, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Component /> : <Navigate to="/auth" />}
//     />
//   );
// }

// export default ProtectedRoute;
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
function ProtectedRoute({ element: Component, isLoggedIn, ...rest }) {
  return isLoggedIn ? <Route {...rest} element={Component} /> : <Navigate to="/signup" />;
}

// function ProtectedRoute({ element: Component, isLoggedIn, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       element={isLoggedIn ? <Component /> : <Navigate to="/signup" />}
//     />
//   );
// }

export default ProtectedRoute;
