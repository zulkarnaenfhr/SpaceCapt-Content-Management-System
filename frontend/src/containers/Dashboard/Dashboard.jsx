import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Cookie from "js-cookie";

const Dashboard = () => {
    let navigate = useNavigate();

    useEffect(() => {
        // document.cookie = "refreshToken=asdasdds";

        const cookienya = Cookie.get("refreshToken");
        if (!cookienya) return navigate("/verify");
    }, []);

    return (
        <div>
            <h1>{Cookie.get("refreshToken")}</h1>
        </div>
    );
};

export default Dashboard;
