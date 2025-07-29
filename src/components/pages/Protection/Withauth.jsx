import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {

    return function ProtectedComponent(props) {

        const isLoggedIn = localStorage.getItem("user");
        if (!isLoggedIn) {
            return <Navigate to="/signIn" replace />;
        }
        return <WrappedComponent {...props} />;
    };
};
export default withAuth;
