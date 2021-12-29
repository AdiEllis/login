import Cookies from 'universal-cookie';
import axios from "axios";

const isLogged = () => {
    const cookies = new Cookies();
    let results = false
    if (cookies.get("username") !== "" &&
        cookies.get("username") != null &&
        cookies.get("token") !== "" &&
        cookies.get("token") != null) {
        axios.post("http://localhost:8080/demo/verifyLogin", {}, {
            params: {
                username: cookies.get("username"),
                token: cookies.get("token")
            }
        }).then((response) => {
            if (response.data === cookies.get("token")) {
                results = true
            }
        }).catch((e) => {
            console.log("error occur.")
        })
    }
    console.log(results)
    return results;
};


export default isLogged