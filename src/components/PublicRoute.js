// components/PublicRoute.js
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useAuthContext();

    return !isAuthenticated ? children : <Navigate to="/dashboard" />;
};

export default PublicRoute;
