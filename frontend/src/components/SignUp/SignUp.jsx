import React from "react";
import styles from "./SignUp.module.css";
import { Container, Col } from "react-bootstrap";

const SignUp = () => {
    return (
        <div id={styles["SignUp-Pages"]}>
            <Container className={styles["SignUp-Pages-Container"]}>
                <Col>
                    <h1 className={styles["SignUp-Pages-Title"]}>SpaceCapt Social Media</h1>
                    <p>helps you connect and share with the people in your life.</p>
                </Col>
                <Col
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            maxWidth: "400px",
                        }}
                    >
                        <form action="" className={styles["Form-Container"]}>
                            <div
                                className={styles["Form-Input-Wrapper"]}
                                style={{
                                    marginTop: "unset",
                                }}
                            >
                                <input type="text" required />
                                <label htmlFor="">Username</label>
                            </div>
                            <div className={styles["Form-Input-Wrapper"]}>
                                <input type="password" required />
                                <label htmlFor="">Password</label>
                            </div>
                            <button type="submit" className={styles["Form-Input-Button-Submit"]}>
                                Log In
                            </button>
                            <p className={styles["Form-Forgoten-Password"]}>Forgotten password?</p>
                            <div className={styles["Form-Border"]}></div>
                            <button className={styles["Form-Input-Button-Register"]}>Create New Account</button>
                        </form>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default SignUp;
