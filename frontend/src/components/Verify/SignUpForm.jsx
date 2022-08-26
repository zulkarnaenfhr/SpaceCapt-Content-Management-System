import React, { useState } from "react";
import styles from "./SignUpForm.module.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignUpForm(props) {
    let navigate = useNavigate();

    const [statusError, setStatusError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerAccount = async (e) => {
        e.preventDefault();
        // console.log(name);
        // console.log(email);
        // console.log(username);
        // console.log(password);
        // console.log(confirmPassword);
        try {
            await axios.post(
                "http://localhost:5000/users",
                {
                    name: name,
                    email: email,
                    username: username,
                    password: password,
                    confirmPassword: confirmPassword,
                },
                {
                    useCredential: true,
                }
            );
            await Swal.fire({
                icon: "success",
                title: "<strong>Registration Success!</strong>",
                timer: "5000",
            });
            navigate("/verify");
        } catch (error) {
            console.log(error.response.data.msg);
            setErrorMsg(error.response.data.msg);
            setStatusError(true);
        }
    };

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
                    <form onSubmit={registerAccount} action="" className={styles["Form-SignUp-Container"]}>
                        {statusError ? (
                            <div className={styles["Status-Invalid-Container"]}>
                                <span>{errorMsg}!</span>
                            </div>
                        ) : (
                            ""
                        )}
                        <div className={styles["Form-SignUp-Input-Wrapper"]}>
                            <input onChange={(e) => setName(e.target.value)} placeholder="a" type="text" required />
                            <label htmlFor="">Name</label>
                        </div>
                        <div className={styles["Form-SignUp-Input-Wrapper"]}>
                            <input onChange={(e) => setEmail(e.target.value)} placeholder="a" type="text" required />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className={styles["Form-SignUp-Input-Wrapper"]}>
                            <input onChange={(e) => setUsername(e.target.value)} placeholder="a" type="text" required />
                            <label htmlFor="">Username</label>
                        </div>
                        <div className={styles["Form-SignUp-Input-Wrapper"]}>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                placeholder="a"
                                required
                            />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className={styles["Form-SignUp-Input-Wrapper"]}>
                            <input
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="a"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                type="password"
                                required
                            />
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
