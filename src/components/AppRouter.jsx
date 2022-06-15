import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./Login";
import MapPage from './MapPage';
import Profile from "./Profile";
import { RequireAuth } from "./RequireAuth"

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login formType="login"/>} />
            <Route path="/registration" element={<Login formType="registration"/>} />
            <Route path="/order" element={
                <RequireAuth>
                    <MapPage pageType="order"/>
                </RequireAuth>
            } />
            <Route path="/profile" element={
                <RequireAuth>
                    <MapPage pageType="profile"/>
                </RequireAuth>
            } />
            <Route path="*" element={<Login formType="login"/>} />
        </Routes>
    )
}

export default AppRouter;