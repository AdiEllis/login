import React, {useState} from "react";
import Cookies from "universal-cookie";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const [errorMsg, setErrorMsg] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate();

    const handleSubmit = () => {
        axios.post("http://localhost:8080/demo/login",
            {},
            {
                params: {
                    username,
                    password
                }
            }).then((response) => {
            if (response.data !== "failed") {
                const cookies = new Cookies();
                cookies.set("username", username);
                cookies.set("token", response.data);
                console.log("logged!");
                navigate('/dashboard');
            } else {
                setErrorMsg("Login failed!")
                console.log("failed!")
            }
        }).catch((error) => {
            setErrorMsg("Error occur, please try again later.")
        });
    }

    return (
        <Container>
            <Row>
                <Col lg={6}>
                    username&nbsp;
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    password&nbsp;
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>{errorMsg}</Col>
                <Col>
                    <button onClick={handleSubmit}>Login</button>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage;