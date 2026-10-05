import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({
  children,
  allowedRoles = [],
}) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="route-loading">
        <div className="loading-spinner"></div>
        <p>Loading EduTrack...</p>
      </div>
    );
  }

  // User is not logged in
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  // User is logged in but doesn't have permission
  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user.role)
  ) {
    const dashboardPath =
      user.role === "Admin"
        ? "/admin"
        : user.role === "Parent"
        ? "/parent"
        : "/driver";

    return (
      <Navigate
        to={dashboardPath}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;