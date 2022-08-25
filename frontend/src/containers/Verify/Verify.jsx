import React from "react";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import SignUpForm from "../../components/Verify/SignUpForm";
import styles from "./Verify.module.css";

const Verify = () => {
    const [modalShow, setModalShow] = useState(true);
    return (
        <div id={styles["Verify"]}>
            <Container>
                <Row className={styles["Verify-Container"]}>
                    <Col lg={6}>
                        <h1 className={styles["Verify-Title"]}>SpaceCapt Social Media</h1>
                        <p>helps you connect and share with the people in your life.</p>
                    </Col>
                    <Col
                        lg={6}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div className={styles["Form-SignIn-Container-Parent"]}>
                            <form action="" className={styles["Form-SignIn-Container"]}>
                                <div
                                    className={styles["Form-SignIn-Input-Wrapper"]}
                                    style={{
                                        marginTop: "unset",
                                    }}
                                >
                                    <input type="text" required />
                                    <label htmlFor="">Username</label>
                                </div>
                                <div className={styles["Form-SignIn-Input-Wrapper"]}>
                                    <input type="password" required />
                                    <label htmlFor="">Password</label>
                                </div>
                                <button type="submit" className={styles["Form-SignIn-Input-Button-Submit"]}>
                                    Log In
                                </button>
                                <p className={styles["Form-SignIn-Forgoten-Password"]}>Forgotten password?</p>
                                <div className={styles["Form-SignIn-Border"]}></div>
                                <div className={styles["Form-SignIn-Input-Button-Register-Container"]}>
                                    <button onClick={() => setModalShow(true)} className={styles["Form-SignIn-Input-Button-Register"]}>
                                        Create New Account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <SignUpForm show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
};

export default Verify;
