import React from "react";
import styles from "./VerifyForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";

const VerifyForm = () => {
    const rightPanel = useRef(null);

    const handleClick = () => {
        rightPanel.current.classList.toggle(styles["RightPanel"]);
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
                        <form action="" className={styles["VerifyForm-Form"]}>
                            <p className={styles["VerifyForm-Label"]}>or use your account</p>
                            <input className={styles["VerifyForm-Input"]} type="text" name="" placeholder="Username" id="" />
                            <br />
                            <input className={styles["VerifyForm-Input"]} type="text" name="" placeholder="Password" id="" />
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
                        <form action="" className={styles["VerifyForm-Form"]}>
                            <p className={styles["VerifyForm-Label"]}>or use your account</p>
                            <input className={styles["VerifyForm-Input"]} type="text" name="" placeholder="Username" id="" />
                            <br />
                            <input className={styles["VerifyForm-Input"]} type="text" name="" placeholder="Password" id="" />
                            <br />
                            <input className={styles["VerifyForm-Input"]} type="text" name="" placeholder="ConfirmPassword" id="" />
                            <br />
                            <input className={styles["VerifyForm-Input"]} type="text" name="" placeholder="Email" id="" />
                            <br />
                            <input className={styles["VerifyForm-Input"]} type="text" name="" placeholder="Name" id="" />
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
