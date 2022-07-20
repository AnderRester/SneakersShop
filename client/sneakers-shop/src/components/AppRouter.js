import React from 'react';
import {Route, Routes, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} Component={Component} exact />
            )}
            {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} Component={Component} exact />)}
        </Routes>
    );
};

export default AppRouter;