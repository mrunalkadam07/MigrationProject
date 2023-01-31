import React from "react";
import { Navigate } from "react-router-dom";

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