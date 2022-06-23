import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoutes = () => {
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: location } }} />
  );
};

export const GuestRoutes = () => {
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);
  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/", state: { from: location } }} />
  );
};

export const AdminRoutes = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return !isAuthenticated && user.role === "ADMIN" ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/", state: { from: location } }} />
  );
};

export const ModeratorRoutes = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return isAuthenticated && user.role === "MODERATOR" ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/", state: { from: location } }} />
  );
};

export const AdminAndModRoutes = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (isAuthenticated && user.role === "MODERATOR") ||
    user.role === "ADMIN" ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/", state: { from: location } }} />
  );
};
