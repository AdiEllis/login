import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import React from "react";

export const routes = [
    {path: "/", exact: true, component: <LoginPage />},
    {path: "/dashboard", exact: true, component: <Dashboard />},
    {path: "/login", exact: true, component: <LoginPage />},
];