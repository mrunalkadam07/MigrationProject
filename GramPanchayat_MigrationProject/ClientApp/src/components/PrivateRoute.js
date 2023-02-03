import React from "react";
import { Navigate } from "react-router-dom";
import history from "./Login/history";
import * as jwt_decode from 'jwt-decode';

const PrivateRoute = ({children}) =>{
    // const [jwt,setJwt] = localStorage.getItem("token");
    const jwt = localStorage.getItem("Token");
    console.log(jwt);
    if(jwt)
    {
        console.log("In assesment");
        return children;
    }
    else
    {
        console.log("Redirected");
        return <Navigate to="/login"/>;
    } 
};

export default PrivateRoute;