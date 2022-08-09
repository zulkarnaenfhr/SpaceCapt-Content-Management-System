import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Cookies from "js-cookie";

const Dashboard = () => {
    let navigate = useNavigate();

    useEffect(() => {
        // document.cookie = "refreshToken=asdasdds";
        const cookienya = Cookies.get("refreshToken");

        if (!cookienya) return navigate("/verify");

        console.log(cookienya);
    });

    return (
        <div>
            <h1>masuk dashbaoard</h1>
        </div>
    );
};

export default Dashboard;
