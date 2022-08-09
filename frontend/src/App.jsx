import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./containers/Dashboard/Dashboard";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
            </Routes>
        </div>
    );
};

export default App;
