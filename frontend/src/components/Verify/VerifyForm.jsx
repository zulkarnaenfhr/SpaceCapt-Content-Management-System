import React from "react";
import styles from "./VerifyForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

const VerifyForm = () => {
    const rightPanel = useRef(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        const cookienya = Cookies.get("refreshToken");
        if (cookienya) return navigate("/");
    }, []);

    const handleClick = () => {
        rightPanel.current.classList.toggle(styles["RightPanel"]);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_URL_BACKEND}/users`, {
                username: username,
                password: password,
                confirmPassword: confirmPassword,
                email: email,
                name: name,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                `${process.env.REACT_APP_URL_BACKEND}/login`,
                {
                    username: username,
                    password: password,
                },
                {
                    withCredentials: true,
                }
            );
            navigate("/");
        } catch (error) {}
    };

    return (
        <div id={styles["VerifyForm-Container"]}>
            <div ref={rightPanel} className={`${styles["VerifyForm"]}`}>
                <div className={styles["VerifyForm-Login"]}>
                    <div className={styles["VerifyForm-Container"]}>
                        <h1 className={styles["VerifyForm-Title"]}>Sign in to Website</h1>
                        <div className={styles["VerifyForm-ThirdParty-Container"]}>
                            <div className={styles["VerifyForm-ThirdParty-Components"]}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                            <div className={styles["VerifyForm-ThirdParty-Components"]}>
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </div>
                            <div className={styles["VerifyForm-ThirdParty-Components"]}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                        </div>
                        <form action="" onSubmit={handleLogin} className={styles["VerifyForm-Form"]}>
                            <p className={styles["VerifyForm-Label"]}>or use your account</p>
                            <input onChange={(e) => setUsername(e.target.value)} className={styles["VerifyForm-Input"]} type="text" name="" placeholder="Username" id="" />
                            <br />
                            <input onChange={(e) => setPassword(e.target.value)} className={styles["VerifyForm-Input"]} type="text" name="" placeholder="Password" id="" />
                            <p className={styles["VerifyForm-Label"]}>Forgot your password?</p>
                            <div className={styles["VerifyForm-Form-Button-Container"]}>
                                <button className={styles["VerifyForm-Form-Button"]} type="submit">
                                    Log In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles["VerifyForm-Overlay"]}>
                    <div className={styles["VerifyForm-Overlay-SignUp"]}>
                        <div className={styles["VerifyForm-Overlay-Container"]}>
                            <h1 className={styles["VerifyForm-Overlay-Container-Title"]}>Hai, Whats'up!</h1>
                            <p className={styles["VerifyForm-Overlay-Container-Desc"]}>Enter your Personal Detail to Join With Us</p>
                            <div className={styles["VerifyForm-Overlay-Button-Container"]}>
                                <button className={styles["VerifyForm-Overlay-Button"]} onClick={handleClick}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles["VerifyForm-Overlay-Login"]}>
                        <div className={styles["VerifyForm-Overlay-Container"]}>
                            <h1 className={styles["VerifyForm-Overlay-Container-Title"]}>Welcome Back!</h1>
                            <p className={styles["VerifyForm-Overlay-Container-Desc"]}>Enter your Username and Password to Enter your Account</p>
                            <div className={styles["VerifyForm-Overlay-Button-Container"]}>
                                <button className={styles["VerifyForm-Overlay-Button"]} onClick={handleClick}>
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["VerifyForm-SignUp"]}>
                    <div className={styles["VerifyForm-Container"]}>
                        <h1 className={styles["VerifyForm-Title"]}>Create Account</h1>{" "}
                        <div className={styles["VerifyForm-ThirdParty-Container"]}>
                            <div className={styles["VerifyForm-ThirdParty-Components"]}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                            <div className={styles["VerifyForm-ThirdParty-Components"]}>
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </div>
                            <div className={styles["VerifyForm-ThirdParty-Components"]}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                        </div>
                        <form action="" onSubmit={handleRegister} className={styles["VerifyForm-Form"]}>
                            <p className={styles["VerifyForm-Label"]}>or use your account</p>
                            <input onChange={(e) => setUsername(e.target.value)} className={styles["VerifyForm-Input"]} type="text" name="" required placeholder="Username" id="" />
                            <br />
                            <input onChange={(e) => setPassword(e.target.value)} className={styles["VerifyForm-Input"]} type="text" name="" required placeholder="Password" id="" />
                            <br />
                            <input onChange={(e) => setConfirmPassword(e.target.value)} className={styles["VerifyForm-Input"]} type="text" name="" required placeholder="ConfirmPassword" id="" />
                            <br />
                            <input onChange={(e) => setEmail(e.target.value)} className={styles["VerifyForm-Input"]} type="text" name="" placeholder="Email" required id="" />
                            <br />
                            <input onChange={(e) => setName(e.target.value)} className={styles["VerifyForm-Input"]} type="text" name="" placeholder="Name" id="" required />
                            <div className={styles["VerifyForm-Form-Button-Container"]}>
                                <button className={styles["VerifyForm-Form-Button"]} type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </form>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyForm;
