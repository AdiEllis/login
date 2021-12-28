import React, {useEffect, useState} from "react";
import isLogged from "../utils/Util";

import axios from "axios";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        if (isLogged()){
            axios.get("http://localhost:8080/demo/getProducts")
                .then((response) => {
                    setProducts(response.data);
                }).catch((e) => {
                    console.log("error occur.");
            })
        }else{
            navigate("/login");
        }
    }, []);
    return (
        <div>
            {
                products.map((item, index) => {
                    return (
                        <div key={index}>
                            <span>Product name: {item.name}</span><br />
                            <span>Price: {item.price}</span>
                        </div>
                    );
                })
            }

        </div>
    )
}

export default Dashboard;