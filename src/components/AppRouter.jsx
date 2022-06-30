import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Main from './Main/Main';
import { RequireAuth } from "./RequireAuth"

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login formType="login" />} />
            <Route path="/registration" element={<Login formType="registration" />} />
            <Route path="/order" element={
                <RequireAuth>
                    <Main pageType="order" />
                </RequireAuth>
            } />
            <Route path="/profile" element={
                <RequireAuth>
                    <Main pageType="profile" />
                </RequireAuth>
            } />
            <Route path="*" element={<Login formType="login" />} />
        </Routes>
    )
}

export default AppRouter;