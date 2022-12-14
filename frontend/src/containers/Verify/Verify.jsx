import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import SignUpForm from "../../components/Verify/SignUpForm";
import styles from "./Verify.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookie from "js-cookie";

const Verify = () => {
    const [modalShow, setModalShow] = useState(true);
    const [statusError, setStatusError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        const cookienya = Cookie.get("refreshToken");
        if (cookienya) return navigate("/");
    }, []);

    const auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://localhost:5000/login",
                {
                    username: username,
                    password: password,
                },
                {
                    Credential: true,
                    withCredentials: true,
                }
            );
            navigate("/");
        } catch (error) {
            await Swal.fire({
                icon: "error",
                title: "<strong>Invalid Username or Password!</strong>",
                timer: "5000",
            });
            setStatusError(true);
        }
    };

    return (
        <div id={styles["Verify"]}>
            <Row className={styles["Verify-Container"]}>
                <Col md={6}>
                    <h1 className={styles["Verify-Title"]}>SpaceCapt Social Media</h1>
                    <p className={styles["Verify-Title2"]}>helps you connect and share with the people in your life.</p>{" "}
                </Col>
                <Col md={6}>
                    <div className={styles["Form-SignIn-Container-Parent"]}>
                        <form onSubmit={auth} action="" className={styles["Form-SignIn-Container"]}>
                            {statusError ? (
                                <div className={styles["Status-Invalid-Container"]}>
                                    <span>Invalid Username or Password!</span>
                                </div>
                            ) : (
                                ""
                            )}

                            <div className={styles["Form-SignIn-Input-Wrapper"]}>
                                <input placeholder="a" onChange={(e) => setUsername(e.target.value)} type="text" required />
                                <label htmlFor="">Username</label>
                            </div>
                            <div className={styles["Form-SignIn-Input-Wrapper"]}>
                                <input placeholder="a" onChange={(e) => setPassword(e.target.value)} type="password" required />
                                <label htmlFor="">Password</label>
                            </div>
                            <button onClick={SubmitEvent} type="submit" className={styles["Form-SignIn-Input-Button-Submit"]}>
                                Log In
                            </button>
                            <p className={styles["Form-SignIn-Forgoten-Password"]}>Forgotten password?</p>
                            <div className={styles["Form-SignIn-Border"]}></div>
                            <div className={styles["Form-SignIn-Input-Button-Register-Container"]}>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setModalShow(true);
                                    }}
                                    className={styles["Form-SignIn-Input-Button-Register"]}
                                >
                                    Create New Account
                                </button>
                            </div>
                        </form>
                    </div>{" "}
                </Col>
            </Row>

            <SignUpForm show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
};

export default Verify;
