import React from "react";
import styles from "./SignUpForm.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function SignUpForm(props) {
    return (
        <Modal {...props} size="lg" dialogClassName={styles["Form-Register-Parent"]} contentClassName={styles["Form-Register"]} aria-labelledby="contained-modal-title-vcenter" centered>
            <div>
                <Modal.Header closeButton>
                    <div className={styles["Modal-Header-Container"]}>
                        <h1>Sign Up</h1>
                        <br />
                        <p>Create your account to join with us</p>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <form action="" className={styles["Form-SignUp-Container"]}>
                        <div
                            className={styles["Form-SignUp-Input-Wrapper"]}
                            style={{
                                marginTop: "unset",
                            }}
                        >
                            <input placeholder="a" type="text" required />
                            <label htmlFor="">Name</label>
                        </div>
                        <div className={styles["Form-SignUp-Input-Wrapper"]}>
                            <input placeholder="a" type="text" required />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className={styles["Form-SignUp-Input-Wrapper"]}>
                            <input placeholder="a" type="text" required />
                            <label htmlFor="">Username</label>
                        </div>
                        <div className={styles["Form-SignUp-Input-Wrapper"]}>
                            <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="a" required />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className={styles["Form-SignUp-Input-Wrapper"]}>
                            <input placeholder="a" type="password" required />
                            <label htmlFor="">Confirm Password</label>
                        </div>

                        <button type="submit" className={styles["Form-SignUp-Input-Button-Submit"]}>
                            Log In
                        </button>
                    </form>
                </Modal.Body>
            </div>
        </Modal>
    );
}
