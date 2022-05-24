import React from "react";
import { render, act } from "@testing-library/react";
import { AuthContext, AuthProvider } from "./AuthContext";

const openPage = jest.fn();

describe("AuthContext", () => {
    let isLoggedIn;
    let logout;
    let login;
    it("renders correctly", ()=>{
        render(
            <AuthProvider openPage={openPage}>
                <AuthContext.Consumer>{value => {
                    isLoggedIn = value.isLoggedIn;
                    login = value.login;
                    logout = value.logout;
                    return null;
                }}</AuthContext.Consumer>
            </AuthProvider>);
            expect(isLoggedIn).toBeFalsy;
            expect(login).toBeDefined();
            expect(logout).toBeDefined();
    })

    describe("method login", () => {
        it("sets isLoggedIn to true", () => {
            render(
                <AuthProvider openPage={openPage}>
                    <AuthContext.Consumer>{value => {
                        isLoggedIn = value.isLoggedIn;
                        login = value.login;
                        return null;
                    }}</AuthContext.Consumer>
                </AuthProvider>);
            expect(isLoggedIn).toBe(false);
            act(() => {
                login('test@mail.ru', '123')
            })
            expect(isLoggedIn).toBe(true);
        })
    });

    describe("method logout", () => {
        it("sets isLoggedIn to false", () => {
            render(
                <AuthProvider openPage={openPage}>
                    <AuthContext.Consumer>{value => {
                        isLoggedIn = value.isLoggedIn;
                        login = value.login;
                        logout = value.logout;
                        return null;
                    }}</AuthContext.Consumer>
                </AuthProvider>);
            act(() => {
                login('test@mail.ru', '123')
            })
            expect(isLoggedIn).toBe(true);
            act(() => {
                logout()
            })
            expect(isLoggedIn).toBe(false);
        })
    })
})

