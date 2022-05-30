import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./Login";
import Registration from './Registration';
import MapPage from './MapPage';
import Profile from "./Profile";
import { RequireAuth } from "./RequireAuth"

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/map" element={
                <RequireAuth>
                    <MapPage />
                </RequireAuth>
            } />
            <Route path="/profile" element={
                <RequireAuth>
                    <Profile />
                </RequireAuth>
            } />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
}

export default AppRouter;