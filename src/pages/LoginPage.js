import React, {useState} from "react";
import Cookies from "universal-cookie";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import history from "../component/history";
import {checkLogin} from "../utils/Util";

const LoginPage = () => {
    const [errorMsg, setErrorMsg] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        {
            if (checkLogin(username,password)) {
                const cookies = new Cookies();
                cookies.set("logged_in", "1");
                console.log("logged!")
                history.push("/dashboard");
                setErrorMsg("")
            } else {
                setErrorMsg("username or password invalid")
            }


        }

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
                        }
                        }
                    />
                </Col>
            </Row>
            <Row>
                <Col>{errorMsg}</Col>
                <Col>
                    <button onClick={login}>Login</button>
                </Col>
            </Row>
</Container>
)
}

export default LoginPage;