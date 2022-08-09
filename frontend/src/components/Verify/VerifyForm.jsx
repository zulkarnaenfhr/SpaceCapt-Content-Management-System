import React from "react";
import styles from "./VerifyForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faTwitter } from "@fortawesome/free-brands-svg-icons";

const VerifyForm = () => {
    return (
        <div id={styles["VerifyForm-Container"]}>
            <div className={styles["VerifyForm"]}>
                <div className={styles["VerifyForm-Login"]}>
                    <div>
                        <h1>Sign in to Website</h1>
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
            </div>
        </div>
    );
};

export default VerifyForm;
