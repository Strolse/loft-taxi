import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


export const RequireAuth = connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))
    (({ children, isLoggedIn }) => {

        if (!isLoggedIn) {
            return <Navigate to="/login" />;
        }
        return children;
    }
    )


