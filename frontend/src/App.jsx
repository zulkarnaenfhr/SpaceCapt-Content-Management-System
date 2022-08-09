import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./containers/Dashboard/Dashboard";
import Verify from "./containers/Verify/Verify";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/verify" exact element={<Verify />} />
            </Routes>
        </div>
    );
};

export default App;
