import React from "react";
import { Route, Routes } from "react-router";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./containers/Dashboard/Dashboard";
import Verify from "./containers/Verify/Verify";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/verify" exact element={<Verify />} />
                <Route path="/signup" exact element={<SignUp />} />
                <Route path="/login" exact element={<LogIn />} />
            </Routes>
        </div>
    );
};

export default App;
